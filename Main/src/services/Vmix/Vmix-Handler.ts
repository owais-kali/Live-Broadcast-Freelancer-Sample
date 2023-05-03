import "module-alias/register";

import axios, { AxiosResponse } from "axios";

import { playerInfo } from "@services/types/playerInfo";
import { PCOB_Handler } from "@services/PCOB/PCOB-Handler";
import { env } from "@configs/env";
import { SendAPIRequest } from "./Shortcuts/Shortcuts";
import { Input, FileType } from "./Shortcuts/Functions/Input";
import { Overlay } from "./Shortcuts/Functions/Overlay";
import { InGameGT } from "@configs/InGameGT";
import { ELIMINATION } from "./GTs/Settings/ELIMINATION";

export class VMix_Handler {
  private url: string;
  private ActiveGTs: Map<number, string> = new Map();

  constructor(vmix_url: string) {
    this.url = vmix_url;
  }

  SetCallbacks(PCOB_Handler: PCOB_Handler) {
    PCOB_Handler.OnEliminated = this.Elimination.bind(this);
  }

  Elimination(playerInfo: playerInfo) {
    console.log(
      "player: " + JSON.stringify(playerInfo.playerName) + " is dead!"
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

    const setting: ELIMINATION = new ELIMINATION();
    setting.Text.ELIMS.Name

    const elim: Overlay = new Overlay();
    elim.Function = elim.Function_Names.OverlayInput_1;
    elim.Input = InGameGT.ELIMINATION;
    SendAPIRequest(elim);
  }
}
