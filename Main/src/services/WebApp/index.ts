import { env } from "@configs/env";
import express, { Express, Request, Response, Router } from "express";
import path from "path";

export function Main(): Router {
  const router = express.Router();

  router.use("/",express.static(env.Public_DIR_Path))
  return router;
}
