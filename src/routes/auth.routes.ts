import { Router, IRouter } from "express";
import AuthController from "../controllers/auth.controller";
class AuthRouter {
  public _router: IRouter;
  protected _authController: AuthController;
  constructor() {
    this._router = Router();
    this._authController = new AuthController();
    this.routes();
  }
  
  public routes(): void {
    this._router.post("/login", this._authController.login);
    this._router.post("/register", this._authController.register);
  }
}

export default AuthRouter;