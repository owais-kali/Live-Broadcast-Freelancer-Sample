export class ENV {
  HTTP: string = "http";
  GTZIP_INGAME_PATH: string = String.raw`D:\Freelancer\ESports\GTs\GTZIP_INGAME`;
  VMIX_URL: string = "127.0.0.1:8088";
  EC_Agent_URL: string = "127.0.0.1:4041";
  PCOB_URL: string = "127.0.0.1:10086";
}

export const env: ENV = new ENV;
