import { Express } from "./../Express";
import Locals from "./../Locals";

class pcob_dummy_app {
  // Loads your Server
  public loadServer(): void {
    let express: Express = new Express(Locals.config().PCOB_port);
  }
}

export default new App();
