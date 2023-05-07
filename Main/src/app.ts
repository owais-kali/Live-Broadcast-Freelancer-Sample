import 'module-alias/register';
import express, { Express, Request, Response } from "express";

import { VMix_Handler } from "./services/Vmix/Vmix-Handler";
import { PCOB_Handler } from "./services/PCOB/PCOB-Handler";
import { env } from "@configs/env";
import { LoadInGameGTs } from '@services/Vmix/GTs/GTs';
import { Overlay } from '@services/Vmix/Shortcuts/Functions/Overlay';
import { SendAPIRequest } from '@services/Vmix/Shortcuts/Shortcuts';
import { InGameGT } from '@configs/InGameGT';
import { Sandbox1 } from "./sandbox/sandbox";
import { Start } from '@sandbox/TestBatchAPI';
import {Main} from '@services/WebApp/index';
import path from "path";

const app: Express = express();
const port = 3000;

let vmix_handler = new VMix_Handler(env.VMIX_URL);
let pcob_handler = new PCOB_Handler(env.PCOB_URL);

// LoadInGameGTs();

vmix_handler.SetCallbacks(pcob_handler);
pcob_handler.Start();

app.use('/App',Main());

app.listen(port, () => {
  console.log(`VMix Handler listening on port ${port}`);
});
