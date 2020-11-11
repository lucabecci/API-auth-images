import { Router, IRouter } from "express";
import IndexController from "../controllers/index.controller";
import passport from "passport";
class IndexRouter {
  public _router: IRouter;
  public _indexController: IndexController;

  constructor() {
    this._router = Router();
    this._indexController = new IndexController();
    this.routes();
  }

  public routes(): void {
    this._router.get("/", this._indexController.index);

    this._router.get(
      "/private",
      passport.authenticate("jwt", { session: false }),
      this._indexController.private
    );
  }
}

export default IndexRouter;
