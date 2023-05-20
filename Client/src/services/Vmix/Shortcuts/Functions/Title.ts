import { IApi } from "src/services/Vmix/Shortcuts/IApi";
import { GT_Settings } from "src/services/Vmix/GTs/GT_Settings";
import { SendAPIRequest } from "../Shortcuts";

export class Title implements IApi {
  Input: string = "";
  Function: string = "";
  Value: string = "";

  Duration: number = 0;

  Mix: number = 0;
  Title: string = "";
  Description1: string = "";
  Description2: string = "";

  async SetText(GT_Name: string, Title: string ,value: string) {
    this.Function = "SetText"
    this.Input = GT_Name;
    this.Title = Title;
    this.Value = value;

    await SendAPIRequest(this)
  }
}
