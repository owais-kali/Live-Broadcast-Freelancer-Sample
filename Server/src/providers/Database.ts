import * as mogoose_promise from "mongoose";
import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";

import * as Promise from "bluebird";
import { MongoError } from "mongodb";

import Locals from "./Locals";
import Log from "../middlewares/Log";

export class Database {
  // Initialize your database pool
  public static init(): any {
    const dsn = Locals.config().mongooseUrl;
    const options: ConnectOptions = { dbName: "ESportCounty", useNewUrlParser: true, useUnifiedTopology: true };

    (mogoose_promise as any).Promise = Promise;

    mongoose
      .connect(dsn, options)
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.log(`MongoDB connection error: ${err}`));
  }
}

export default mongoose;
