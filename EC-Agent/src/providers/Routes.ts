import { Application } from "express";

import PCOB_API_Router from '../routes/PCOB_API';
import VmixProxyRouter from "../routes/VmixProxy";

import Locals from "./Locals";
import Log from "../middlewares/Log";

class Routes {
  public mountPCOB_API(_express: Application): Application {
    const apiPrefix = Locals.config().PCOB_API_Prefix;
    Log.info("Routes :: Mounting API Routes...");

    return _express.use(`/${apiPrefix}`, PCOB_API_Router);
  }

  public mountVmixProxy(_express: Application): Application {
    const proxyPrefix = Locals.config().proxyPrefix;
    Log.info("Routes :: Mounting VmixProxy Routes...");

    return _express.use(`/${proxyPrefix}`, VmixProxyRouter);
  }
}

export default new Routes();
