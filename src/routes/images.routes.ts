import { Router, IRouter } from "express";
import ImagesController from '../controllers/images.controller'
class ImagesRouter{
    public _router: IRouter
    public _imagesController: ImagesController
    constructor(){
        this._router = Router()
        this._imagesController = new ImagesController
        this.routes()
    }

    public routes(): void{
        this._router.get('/', this._imagesController.getImages)
    }
}

export default ImagesRouter