import axios, { AxiosResponse } from "axios";

import { playerInfo } from "@services/types/playerInfo";
import { PCOB_Handler } from "@services/PCOB/PCOB-Handler";
import { env } from "@configs/env";
import { SendAPIRequest } from "@Vmix/Shortcuts/Shortcuts";
import { Input, FileType } from "@Vmix/Shortcuts/Functions/Input";
import { Overlay } from "@Vmix/Shortcuts/Functions/Overlay";
import { InGameGT } from "@configs/InGameGT";
import { ELIMINATION as ELIMINATION_GT } from "@Vmix/GTs/Settings/ELIMINATION";
import { Settings } from "@configs/Settings";

export function Elimination(playerInfo: playerInfo) {
  const data: ELIMINATION_GT = new ELIMINATION_GT();
  // setting.Text.ELIMS.Value = 01;

  const transition: Overlay = new Overlay();
  transition.Function = transition.Function_Names.OverlayInput_1;
  transition.Input = InGameGT.ELIMINATION;

  SendAPIRequest(transition).then((res) => {
    setTimeout(() => {
      SendAPIRequest(transition);
    }, Settings.PopUp_Duration);
  });
}
