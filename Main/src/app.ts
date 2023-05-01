import 'module-alias/register';
import express, { Express, Request, Response } from "express";

import { VMix_Handler } from "./services/Vmix/Vmix-Handler";
import { PCOB_Handler } from "./services/PCOB/PCOB-Handler";
import { env } from "@configs/env";
import { LoadInGameGTs } from '@services/Vmix/GTs/GTs';

const app: Express = express();
const port = 3000;

let vmix_handler = new VMix_Handler(env.VMIX_URL);
let pcob_handler = new PCOB_Handler(env.PCOB_URL);

vmix_handler.SetCallbacks(pcob_handler);
LoadInGameGTs();

pcob_handler.Start();

app.listen(port, () => {
  console.log(`VMix Handler listening on port ${port}`);
});
