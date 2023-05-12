import { IApi } from "@Vmix/Shortcuts/IApi";
import { GT_Settings } from "@services/Vmix/GTs/GT_Settings";

export class Title implements IApi {
  Input: string = "";
  Function: string = "";
  Value: string = "";

  Duration: number = 0;

  Mix: number = 0;
  Title: string = "";
  Description1: string = "";
  Description2: string = "";

  SetText(GT_Name: string, Title: string ,value: string): void {
    this.Function = "SetText"
    this.Input = GT_Name;
    this.Title = Title;
    this.Value = value;
  }
}
