import axios, { AxiosResponse } from "axios";
import { playerInfo } from "../types/playerInfo";
import { PCOB_Handler } from "../PCOB/PCOB-Handler";
import { getConfig } from "../env";

import fs from "fs";

export class VMix_Handler {
  url: string;

  constructor(vmix_url: string) {
    this.url = vmix_url;
  }

  SetCallbacks(PCOB_Handler: PCOB_Handler) {
    PCOB_Handler.OnEliminated = this.Elimination.bind(this);
  }

  LoadGTs() {
    const GTZIP_INGAME_PATH = getConfig().GTZIP_INGAME_PATH;

    fs.readdirSync(GTZIP_INGAME_PATH).forEach((file) => {
      //Title|d:\Freelancer\ESports\GTs\GTZIP_INGAME\DOMINATION.gtzip
      if (file == "ELIMINATION.gtzip") console.log("file: " + file);
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
