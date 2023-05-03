import { IApi } from "@Vmix/Shortcuts/IApi";
import { GT_Settings } from "@services/Vmix/GTs/GT_Settings";

export class Transition implements IApi {
  AddGT_Setting(GT_Settings: GT_Settings): void {
    throw new Error("Method not implemented.");
  }
  Input: string = "";
  Function: string = "";
  Value: string = "";

  Duration: number = 0;

  Mix: number = 0;
  Title: string = "";
  Description1: string = "";
  Description2: string = "";

  Function_Names = Object.freeze({
    Fade: "Fade",
  });
}
