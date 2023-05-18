import axios, { AxiosResponse } from "axios";

import { playerInfo } from "src/services/types/playerInfo";
import { SendAPIRequest } from "src/services/Vmix/Shortcuts/Shortcuts";
import { Overlay } from "src/services/Vmix/Shortcuts/Functions/Overlay";
import { InGameGT } from "src/configs/InGameGT";
import { ELIMINATION as ELIMINATION_GT } from "src/services/Vmix/GTs/Settings/ELIMINATION";
import { Settings } from "src/configs/Settings";
import { Title } from "../Shortcuts/Functions/Title";

export function Elimination(playerInfo: playerInfo) {
  const data: ELIMINATION_GT = new ELIMINATION_GT();
  data.SetText(data.Text.ELIMS, playerInfo.killNum.toString());
  data.SetText(data.Text.RANK, "%23"+playerInfo.rank.toString());
  data.SetText(data.Text.TEAM_NAME, playerInfo.teamName);

  const transition: Overlay = new Overlay();
  transition.Function = transition.Function_Names.OverlayInput_1;
  transition.Input = InGameGT.ELIMINATION;

  SendAPIRequest(transition).then((res) => {
    setTimeout(() => {
      SendAPIRequest(transition);
    }, Settings.PopUp_Duration);
  });
}
