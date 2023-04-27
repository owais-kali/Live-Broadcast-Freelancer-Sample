const axios = require("axios");

import { Player } from "./Player";

export class PCOB_Handler {
  url: string; //PCOB URL
  playerInfoMap: Map<number, Player> = new Map(); //PlayerInfoMap
  GetTotalPlayerList_Loop: NodeJS.Timeout;

  // Callbacks
  OnEliminated: Function;

  constructor(pcob_url: string) {
    this.url = pcob_url;
  }

  // Get TotalPlayerList JSON data from PCOB
  GetTotalPlayerList() {
    var obj = axios.get("http://" + this.url + "/gettotalplayerlist");
    var playerInfoList = obj.data.playerInfoList;

    for (let i = 0; i < playerInfoList.length; i++) {
      const element = playerInfoList[i];

      this.playerInfoMap.set(element.uId, {
        Eliminated: false,
      });

      // Check LiveState
      const liveState = element.liveState;
      if (
        liveState == 5 &&
        this.playerInfoMap.get(element.uId).Eliminated == false
      ) {
        this.playerInfoMap.get(element.uId).Eliminated = true;
        this.OnEliminated(element.playerName);
      }
    }
  }

  Start() {
    this.GetTotalPlayerList_Loop = setInterval(this.GetTotalPlayerList, 1000);
  }

  Stop() {
    clearInterval(this.GetTotalPlayerList_Loop);
  }
}
