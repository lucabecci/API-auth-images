import { Router, IRouter } from "express";
import IndexController from "../controllers/index.controller";
class IndexRoutes {
  public _router: IRouter;
  public _indexController: IndexController;

  constructor() {
    this._router = Router();
    this._indexController = new IndexController();
    this.routes();
  }

  public routes(): void {
    this._router.get("/", this._indexController.index);
  }
}

export default IndexRoutes;
