import { PCOB_Handler } from "@PCOB/PCOB-Handler";
import { Elimination as Elimination_Callback } from "@Vmix/Callbacks/Elimination"

export class VMix_Handler {
  private url: string;
  private ActiveGTs: Map<number, string> = new Map();

  constructor(vmix_url: string) {
    this.url = vmix_url;
  }

  SetCallbacks(PCOB_Handler: PCOB_Handler) {
    PCOB_Handler.OnEliminated = Elimination_Callback.bind(this);
  }
}
