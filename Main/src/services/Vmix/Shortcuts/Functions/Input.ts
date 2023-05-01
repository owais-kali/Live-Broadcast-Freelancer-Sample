import { IApi } from "@Vmix/Shortcuts/Shortcuts";

export const FileType = {
  Title: "Title",
};

export class Input implements IApi {
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
}
