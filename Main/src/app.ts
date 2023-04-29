import express, { Express, Request, Response } from "express";

import { VMix_Handler } from "./Vmix/Vmix-Handler";
import { PCOB_Handler } from "./PCOB/PCOB-Handler";
import { LoadENV, getConfig } from "./env";

LoadENV();

const app: Express = express();
const port = 3000;

const vmix_url = getConfig().VMIX_URL;
const pcob_url = getConfig().PCOB_URL;

let vmix_handler = new VMix_Handler(vmix_url);
let pcob_handler = new PCOB_Handler(pcob_url);

vmix_handler.SetCallbacks(pcob_handler);
vmix_handler.LoadGTs();
pcob_handler.Start();

app.listen(port, () => {
  console.log(`VMix Handler listening on port ${port}`);
});
