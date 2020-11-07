import mongoose, { ConnectionOptions, Mongoose } from "mongoose";
import config from "../config/config";

class Database {
  _mongoose: Mongoose;
  _URI: string;
  _options: ConnectionOptions;
  constructor() {
    this._mongoose = mongoose;
    this._URI = config.DB.URI;
    this._options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };
  }

  public async connection(): Promise<void> {
    await this._mongoose.connect(this._URI, this._options);
  }
}

export default Database;
