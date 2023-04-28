import express, { Express, Request, Response } from 'express';

// import { VMix_Handler } from "./Vmix/Vmix-Handler";
import { PCOB_Handler } from "./PCOB/PCOB-Handler";

const app: Express = express();
const port = 3000;

const vmix_url = "127.0.0.1:8088";
const pcob_url = "127.0.0.1:10086";

// let vmix_handler = new VMix_Handler(vmix_url);
let pcob_handler = new PCOB_Handler(pcob_url);

pcob_handler.Start();

app.listen(port, () => {
  console.log(`VMix Handler listening on port ${port}`);
});
