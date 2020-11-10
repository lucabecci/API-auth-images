import { Router, IRouter } from "express";
import passport from 'passport'
import ImagesController from "../controllers/images.controller";
import multer from "../middlewares/multer";
class ImagesRouter {
  public _router: IRouter;
  public _imagesController: ImagesController;
  constructor() {
    this._router = Router();
    this._imagesController = new ImagesController();
    this.routes();
  }

  public routes(): void {
    this._router.post("/", passport.authenticate('jwt', {session: false}), multer.single("image"), this._imagesController.createImage);
    this._router.get("/", passport.authenticate('jwt', {session: false}), this._imagesController.getImages);

    //:id
    this._router.get('/:id', passport.authenticate('jwt', {session: false}),this._imagesController.getImage)
    this._router.delete('/:id', passport.authenticate('jwt', {session: false}),this._imagesController.deleteImage)
    this._router.put('/:id', passport.authenticate('jwt', {session: false}), this._imagesController.updateImage)
  }
}
export default ImagesRouter;
