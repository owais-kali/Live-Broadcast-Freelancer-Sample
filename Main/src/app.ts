import "module-alias/register";
import express, { Express, Request, Response } from "express";

import { VMix_Handler } from "./services/Vmix/Vmix-Handler";
import { PCOB_Handler } from "./services/PCOB/PCOB-Handler";
import { env } from "@configs/env";
import { LoadInGameGTs } from "@services/Vmix/GTs/GTs";
import { Overlay } from "@services/Vmix/Shortcuts/Functions/Overlay";
import { SendAPIRequest } from "@services/Vmix/Shortcuts/Shortcuts";
import { InGameGT } from "@configs/InGameGT";
import { Sandbox1 } from "./sandbox/sandbox";
import { Start } from "@sandbox/TestBatchAPI";
import { Main } from "@services/WebApp/index";
import path from "path";
import Bootstrap from "./middlewares/Kernel";

import Locals from "./providers/Locals";
import App from "./providers/App";

/**
 * Run the Database pool
 */
App.loadDatabase();

/**
 * Run the Server on Clusters
 */
App.loadServer();
