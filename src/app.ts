import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import Database from "./database/database";
import config from "./config/config";
import IndexRoutes from "./routes/index.routes";
class App {
  public _app: Application;
  public _database: Database;
  public _port: string | number;
  public _indexRoutes: IndexRoutes;

  constructor() {
    this._app = express();
    this._database = new Database();
    this._port = config.PORT;
    this._indexRoutes = new IndexRoutes();
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
  }

  public routes(): void {
    this._app.use("/", this._indexRoutes._router);
  }

  public async run(): Promise<void> {
    await this._app.listen(this._port, () => {
      console.log("Server on port:", this._port);
    });
  }
}

export default App;
