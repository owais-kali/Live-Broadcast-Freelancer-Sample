import * as dotenv from "dotenv";
import path from "path";
export class ENV {
  HTTP: string = "http";
  GTZIP_INGAME_PATH: string = String.raw`D:\Freelancer\ESports\GTs\GTZIP_INGAME`;
  VMIX_URL: string = "127.0.0.1:8088";
  PCOB_URL: string = "127.0.0.1:10086";
  Public_DIR_Path: string = path.join(__dirname, "../../public")
}

export const env: ENV = new ENV;
