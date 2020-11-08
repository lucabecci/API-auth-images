import { Request, Response, Handler, NextFunction } from "express";
import Image from '../models/Image'
import Check from '../helpers/checks'
import rimraf from 'rimraf'

class ImagesController {
  public _check: Check

  constructor(){
    this._check = new Check
  }

  public createImage: Handler = async(req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const {title, description, user_id} = req.body
    const newImage = {
      title: title,
      description: description,
      imagePath: req.file.path,
      user_id: user_id
    }
    const checked = this._check.createCheckCamps(title, description, req.file.path)
    if(checked){
      rimraf(`${req.file.path}`, next)
      return res.status(400).json({
        success: false,
        msg: "please check all camps."
      });  
    }
    const image = new Image(newImage)
    await image.save()
    return res.status(200).json({
      success: true,
      image
    })
  };

  public getImages: Handler = async(req: Request, res: Response):Promise<Response> => {
    const user_id = req.body.user_id
    const images = await Image.find({user_id: user_id}).sort({createdAt: 'desc'})

    return res.status(200).json({
      success: true,
      images
    })
  }

}

export default ImagesController;
