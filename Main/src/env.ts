import * as dotenv from "dotenv";

export interface ENV {
  HTTP: string;
  GTZIP_INGAME_PATH: string;
  VMIX_URL: string;
  PCOB_URL: string;
}

export const getConfig = (): ENV => {
  return {
    HTTP: process.env.SSL ? "https" : "http",
    GTZIP_INGAME_PATH: process.env.GTZIP_INGAME_PATH
      ? process.env.GTZIP_INGAME_PATH
      : "",
    VMIX_URL: process.env.VMIX_URL ? process.env.VMIX_URL : "127.0.0.1:8088",
    PCOB_URL: process.env.PCOB_URL ? process.env.PCOB_URL : "127.0.0.1:8088",
  };
};

export function LoadENV() {
  dotenv.config({ path: __dirname + "\\..\\dev.env" });
}
