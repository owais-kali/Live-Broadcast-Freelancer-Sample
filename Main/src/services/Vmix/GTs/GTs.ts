import fs from "fs";

import { env } from "@configs/env";
import { Shortcuts } from "../Shortcuts/Shortcuts";
import { FileType, Input } from "../Shortcuts/Functions/Input";

export const ActiveGTs: Map<number, string> = new Map();

export function LoadInGameGTs(): void {
  const GTZIP_INGAME_PATH = env.GTZIP_INGAME_PATH;

  fs.readdirSync(GTZIP_INGAME_PATH).forEach((file) => {
    const filepath: string = GTZIP_INGAME_PATH + "\\" + file;

    let shortcuts = new Shortcuts(env.VMIX_URL);
    let input = new Input();
    let ft: string = FileType.Title;

    input.AddInput(ft, filepath);
    shortcuts.SendAPIRequest(input);
  });
}
