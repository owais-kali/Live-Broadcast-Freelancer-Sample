import { IApi } from "src/services/Vmix/Shortcuts/IApi";
import { GT_Settings } from "src/services/Vmix/GTs/GT_Settings";

export const FileType = {
  Title: "Title",
};

export class Input implements IApi {
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

  AddInput(FileType: string, FilePath: string) {
    this.Function = "AddInput";
    this.Value = FileType + "|" + FilePath;
  }

  RemoveInput(GT_Name: string) {
    this.Function = "RemoveInput";
    this.Input = GT_Name;
  }
}
