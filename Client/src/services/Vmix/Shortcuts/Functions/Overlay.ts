import { IApi } from "src/services/Vmix/Shortcuts/IApi";
import { GT_Settings } from "src/services/Vmix/GTs/GT_Settings";

export class Overlay implements IApi {
  Function: string = "";
  Value: string = "";
  Input: string = "";
  Duration: number = 0;
  Mix: number = 0;
  Title: string = "";
  Description1: string = "";
  Description2: string = "";

  Function_Names = Object.freeze({
    Move_Multi_ViewOverlay: "Move_Multi_ViewOverlay",

    MultiViewOverlay: "MultiViewOverlay",

    MultiViewOverlayOff: "MultiViewOverlayOff",

    MultiViewOverlayOn: "MultiViewOverlayOn",

    OverlayInput_1: "OverlayInput1",

    OverlayInput_lIn: "OverlayInput_lIn",

    OverlayInput_1Last: "OverlayInput_1Last",

    OverlayInput_10f: "OverlayInput_10f",

    OverlayInput_10ut: "OverlayInput_10ut",

    OverlayInput_1Zoom: "OverlayInput_1Zoom",

    OverlayInput2: "OverlayInput2",

    OverlayInout2In: "OverlayInout2In",

    OverlayInput2Last: "OverlayInput2Last",

    OverlayInput_2Off: "OverlayInput_2Off",

    OverlayInput20ut: "OverlayInput20ut",

    OverlayInput2Zoom: "OverlayInput2Zoom",

    OverlayInput3: "OverlayInput3",

    OverlayInput3in: "OverlayInput3in",

    OverlayInput_3Last: "OverlayInput_3Last",

    OverlayInput30ff: "OverlayInput30ff",

    OverlayInput30ut: "OverlayInput30ut",

    OverlayInput3Zoom: "OverlayInput3Zoom",

    OverlayInput4: "OverlayInput4",

    OverlayInput4In: "OverlayInput4In",

    OverlayInput_4Last: "OverlayInput_4Last",

    OverlayInput40ff: "OverlayInput40ff",

    OverlayInput40ut: "OverlayInput40ut",

    OverlayInput4Zoom: "OverlayInput4Zoom",

    OverlayInputAlIOff: "OverlayInputAlIOff",

    PreviewOverlayInout1: "PreviewOverlayInout1",

    PreviewOverlayInput: "PreviewOverlayInput",

    PreviewOverlayInput3: "PreviewOverlayInput3",

    PreviewOverlayInput4: "PreviewOverlayInput4",

    SetMultiViewOverlay: "SetMultiViewOverlay",
  });

    
  AddGT_Setting(GT_Settings: GT_Settings): void {
    
  }
}
