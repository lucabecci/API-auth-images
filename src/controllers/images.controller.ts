import { Request, Response, Handler, NextFunction } from "express";
import Image from "../models/Image";
import Check from "../helpers/checks";
import rimraf from "rimraf";
import fs from "fs-extra";
import path from "path";

class ImagesController {
  public _check: Check;

  constructor() {
    this._check = new Check();
  }

  public createImage: Handler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    try {
      const { title, description } = req.body;
      const newImage = {
        title: title,
        description: description,
        imagePath: req.file.path,
        user_id: req.user,
      };
      const checked = this._check.createCheckCamps(
        title,
        description,
        req.file.path
      );
      if (checked) {
        rimraf(`${req.file.path}`, next);
        return res.status(400).json({
          success: false,
          msg: "please check all camps.",
        });
      }
      const image = new Image(newImage);
      await image.save();
      return res.status(200).json({
        success: true,
        image,
      });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .send("Internal server error, please try later or check your server");
    }
  };

  public getImages: Handler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const images = await Image.find({ user_id: req.user }).sort({
      createdAt: "desc",
    });

    return res.status(200).json({
      success: true,
      images,
    });
  };

  public getImage: Handler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const id: string = req.params.id;
      const IDchecked = this._check.IDCheck(id);
      if (IDchecked) {
        return res.status(400).json({
          success: false,
          msg: "ID short, send a valid ID",
        });
      }

      try {
        const image = await Image.findById(id);
        return res.status(200).json({
          success: true,
          image,
        });
      } catch (e) {
        return res.status(400).json({
          success: false,
          msg: "ID not found, please send a valid ID",
        });
      }
    } catch (e) {
      return res.status(500).json({
        success: false,
        msg: "Internal server error, please try later or check the server",
      });
    }
  };

  public deleteImage: Handler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const id: string = req.params.id;
      const IDchecked = this._check.IDCheck(id);

      if (IDchecked) {
        return res.status(400).json({
          success: false,
          msg: "ID short, send a valid ID",
        });
      }
      const image = await Image.findByIdAndDelete(id);
      if (image) {
        await fs.unlink(path.resolve(image.imagePath));
        return res.status(200).json({
          success: true,
          image,
        });
      }

      return res.status(400).json({
        success: false,
        msg:
          "ID image not found, please if you need delete a one image use teh correct ID",
      });
    } catch (e) {
      return res.status(500).json({
        succes: false,
        msg: "Internal server error, try later",
      });
    }
  };

  public updateImage: Handler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const id: string = req.params.id;
      const { title, description } = req.body;

      const IDchecked = this._check.IDCheck(id);
      const bodyChecked = this._check.bodyCheck(title, description);
      if (IDchecked) {
        return res.status(400).json({
          success: false,
          msg: "ID short, send a valid ID",
        });
      } else if (bodyChecked) {
        return res.status(400).json({
          success: false,
          msg: 'please check all camps"',
        });
      }

      try {
        const updatedImage = await Image.findByIdAndUpdate(
          id,
          { title, description },
          { new: true }
        );
        return res.status(200).json({
          success: true,
          updatedImage,
        });
      } catch (e) {
        return res.status(400).json({
          success: false,
          message:
            "ID image not found, please if you need update an image use the correct ID",
        });
      }
    } catch (e) {
      return res.status(500).json({
        success: false,
        msg: "Internal server error, please try later",
      });
    }
  };
}

export default ImagesController;
