import { Player } from "src/services/types/Player";
import { playerInfo } from "src/services/types/playerInfo";
import { PCOB_Handler } from "./PCOB-Handler";

export function CheckElimination(PCOB_Handler: PCOB_Handler, playerInfo: playerInfo){    
    const liveState = playerInfo.liveState;
    const player: Player | undefined = PCOB_Handler.playerInfoMap.get(
      playerInfo.uId
    );
    if (liveState == 5 && player?.Eliminated == false) {
        PCOB_Handler.OnEliminated(playerInfo);
        PCOB_Handler.playerInfoMap.set(playerInfo.uId, {
        Eliminated: true,
      });
    }
}