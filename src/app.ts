import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import passport from "passport";
import Database from "./database/database";
import config from "./config/config";
import passportMiddleware from "./middlewares/passport";

//routes imp
import IndexRouter from "./routes/index.routes";
import ImagesRouter from "./routes/images.routes";
import AuthRouter from "./routes/auth.routes";

class App {
  public _app: Application;
  public _database: Database;
  public _port: string | number;
  public _indexRouter: IndexRouter;
  public _imagesRouter: ImagesRouter;
  public _authRouter: AuthRouter;
  constructor() {
    this._app = express();
    this._database = new Database();
    this._port = config.PORT;
    this._indexRouter = new IndexRouter();
    this._imagesRouter = new ImagesRouter();
    this._authRouter = new AuthRouter();
    this.database();
    this.config();
    this.routes();
  }
  public async database(): Promise<void> {
    await this._database.connection();
    console.log("DB is connected");
  }
  public config(): void {
    this._app.set("port", this._port);
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: false }));
    this._app.use(morgan("dev"));
    this._app.use(cors());
    this._app.use("/uploads", express.static(path.resolve("uploads")));
    this._app.use(passport.initialize());
    passport.use(passportMiddleware);
  }

  public async routes(): Promise<void> {
    await this._app.use("/", this._indexRouter._router);
    await this._app.use("/images", this._imagesRouter._router);
    await this._app.use("/", this._authRouter._router);
  }

  public async run(): Promise<void> {
    await this._app.listen(this._port, () => {
      console.log("Server on port:", this._port);
    });
  }
}

export default App;
