import axios, { AxiosResponse } from "axios";

import { Player } from "../types/Player";
import { playerInfo, playerInfoList } from "../types/playerInfo";

export class PCOB_Handler {
  url: string; //PCOB URL
  playerInfoMap: Map<number, Player> = new Map<number, Player>(); //PlayerInfoMap
  GetTotalPlayerList_Loop: NodeJS.Timeout | undefined;

  // Callbacks
  OnEliminated: (playerInfo: playerInfo) => void = (playerInfo) => {
    console.log("On Eliminated called but not handled!");
  };

  constructor(pcob_url: string) {
    this.url = pcob_url;
  }

  // Get TotalPlayerList JSON data from PCOB
  async GetTotalPlayerList() {
    axios
      .get<playerInfoList>("http://" + this.url + "/gettotalplayerlist")
      .then((res: AxiosResponse<playerInfoList>) => {
        for (let i = 0; i < res.data.playerInfoList.length; i++) {
          const playerInfo: playerInfo = res.data.playerInfoList[i];

          // Check LiveState
          const liveState = playerInfo.liveState;
          const player: Player | undefined = this.playerInfoMap.get(
            playerInfo.uId
          );
          if (liveState == 5 && player?.Eliminated == false) {
            this.OnEliminated(playerInfo);
            this.playerInfoMap.set(playerInfo.uId, {
              Eliminated: true,
            });
          }
        }
      });
  }

  async Start() {
    const res = await axios.get<playerInfoList>(
      "http://" + this.url + "/gettotalplayerlist"
    );
    for (
      let index: number = 0;
      index < res.data.playerInfoList.length;
      index++
    ) {
      const player: Player = { Eliminated: false };
      this.playerInfoMap.set(res.data.playerInfoList[index].uId, player);
    }

    this.GetTotalPlayerList_Loop = setInterval(
      this.GetTotalPlayerList.bind(this),
      1000
    );
  }

  Stop() {
    clearInterval(this.GetTotalPlayerList_Loop);
  }
}
