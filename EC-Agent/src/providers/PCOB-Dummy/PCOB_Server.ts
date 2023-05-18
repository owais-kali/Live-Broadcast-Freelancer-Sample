import express from "express";
import * as http from 'http';

import Locals from "../Locals";
import Bootstrap from "../../middlewares/Kernel";

import * as gettotalplayerlist from "./gettotalplayerlist"

class PCOB_Server {
  /**
   * Create the express object
   */
  public express: express.Application;
  private app: http.Server | undefined;
  private readonly port: number = Locals.config().PCOB_port;

  /**
   * Initializes the express server
   */
  constructor() {
    this.express = express();

    this.mountDotEnv();
    this.mountMiddlewares();
    this.mountAPIs();
  }

  private mountDotEnv (): void {
		this.express = Locals.init(this.express);
	}

  /**
   * Mounts all the defined middlewares
   */
  private mountMiddlewares(): void {
    this.express = Bootstrap.init(this.express);
  }

  private mountAPIs(): void {
    this.express = gettotalplayerlist.mountAPI(this.express);
  }

  /**
   * Starts the express server
   */
  public start(): any {
    if(this.app) return;

    const port = this.port;
    // Start the server on the specified port
    this.app = this.express
      .listen(port, () => {
        return console.log(
          "\x1b[33m%s\x1b[0m",
          `Server :: Running @ 'http://localhost:${port}'`
        );
      })
      .on("error", (_error) => {
        return console.log("Error: ", _error.message);
      });
  }

  /**
   * Stop the express server
   */
  public stop(): any {
    this.app?.closeAllConnections();
    this.app?.close();
    this.app = undefined;
    console.log(
      "\x1b[33m%s\x1b[0m",
      `Server @ 'http://localhost:${this.port}' Stopped`
    );
  }
}

/** Export the express module */
export default new PCOB_Server();
