import axios, { AxiosResponse } from "axios";
import { playerInfo } from "../types/playerInfo";

export class VMix_Handler {
  url: string;

  constructor(vmix_url: string) {
    this.url = vmix_url;
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
