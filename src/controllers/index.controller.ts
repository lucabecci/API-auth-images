import { Request, Response, Handler } from "express";

class IndexController {
  public index: Handler = (req: Request, res: Response): Response => {
    return res.status(201).json({
      success: true,
      msg: "This is my index for my API",
    });
  };

  public private: Handler = (req: Request, res: Response): Response => {
    return res.status(201).json({
      success: true,
      msg: "private",
    });
  };
}

export default IndexController;
