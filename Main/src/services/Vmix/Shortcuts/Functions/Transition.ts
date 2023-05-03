import { IApi } from "@Vmix/Shortcuts/IApi";

export class Transition implements IApi {
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
