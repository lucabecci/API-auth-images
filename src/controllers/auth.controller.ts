import { Request, Response, Handler } from "express";

class AuthController {
  public login: Handler = (req: Request, res: Response): Response<void> => {
    return res.status(200).json({
      success: true,
      msg: "login success",
    });
  };
}

export default AuthController;
