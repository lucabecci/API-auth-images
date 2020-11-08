import { Router, IRouter } from "express";
import AuthController from '../controllers/auth.controller'
class AuthRouter{
    public _router: IRouter
    protected _authController: AuthController
    constructor(){
        this._router = Router()
        this._authController = new AuthController
        this.routes()
    }

    public routes(): void{
        this._router.get('/login', this._authController.login)
    }
}

export default AuthRouter