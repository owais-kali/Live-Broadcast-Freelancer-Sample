import axios, { AxiosResponse } from "axios";
import fs from "fs";

import { playerInfo } from "../types/playerInfo";
import { PCOB_Handler } from "../PCOB/PCOB-Handler";
import { getConfig } from "../env";
import { Shortcuts } from "./Shortcuts/Shortcuts";
import { Input, FileType } from "./Shortcuts/Input";

export class VMix_Handler {
  private url: string;
  private ActiveGTs: Map<number, string> = new Map();

  constructor(vmix_url: string) {
    this.url = vmix_url;
  }

  SetCallbacks(PCOB_Handler: PCOB_Handler) {
    PCOB_Handler.OnEliminated = this.Elimination.bind(this);
  }

  LoadInGameGTs() {
    const GTZIP_INGAME_PATH = getConfig().GTZIP_INGAME_PATH;

    fs.readdirSync(GTZIP_INGAME_PATH).forEach((file) => {
      const filepath:string = GTZIP_INGAME_PATH+"\\"+file;

        let shortcuts = new Shortcuts(this.url);
        let input = new Input();
        let ft:string = FileType.Title;

        input.AddInput(ft, filepath);

        shortcuts.SendAPIRequest(input);
    });
  }

  Elimination(playerInfo: playerInfo) {
    console.log(
      "player: " + JSON.stringify(playerInfo.playerName) + " is dead!"
    );
    console.log(
      "req:" +
        "http://" +
        this.url +
        "/api/?Function=SetText&Input=elimination.gtzip&SelectedName=RANK.Text&Value=" +
        playerInfo.playerName
    );
    axios
      .get(
        "http://" +
          this.url +
          "/api/?Function=SetText&Input=elimination.gtzip&SelectedName=RANK.Text&Value=" +
          playerInfo.playerName
      )
      .then((res: AxiosResponse) => {
        // console.log(res);
      });
  }
}
