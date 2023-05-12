// Loads your Server
import * as kue from "kue";
import * as path from "path";
import * as dotenv from "dotenv";

import Express from './Express';
import { Database } from './Database';

import Queue from './Queue';
import Locals from "./Locals";
import Log from '../middlewares/Log';

class App {
  // Loads your Server
  public loadServer(): void {
    Express.init();
  }

  // Loads the Database Pool
  public loadDatabase(): void {
    Log.info("Database :: Booting @ Master...");

    Database.init();
  }
}

export default new App();
