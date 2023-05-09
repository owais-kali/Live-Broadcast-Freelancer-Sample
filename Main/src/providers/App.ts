// Loads your Server
import * as kue from "kue";
import * as path from "path";
import * as dotenv from "dotenv";

import Express from "./Express";
import Locals from "./Locals";

class App {
  public loadServer(): void {
    Express.init();
  }
}

export default new App;