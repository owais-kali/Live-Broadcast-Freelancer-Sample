import { IApi } from "../Shortcuts";

export class Overlay implements IApi {
  Function: string= ""
  Value: string= ""
  Input: string= ""
  Duration: number= 0
  Mix: number= 0
  Title: string= ""
  Description1: string= ""
  Description2: string= ""

  Function_Names = Object.freeze({
    Move_Multi_ViewOverlay: "Move_Multi_ViewOverlay",

    MultiViewOverlay: "MultiViewOverlay",

    MultiViewOverlayOff: "MultiViewOverlayOff",

    MultiViewOverlayOn: "MultiViewOverlayOn",

    OverlayInput_1: "OverlayInput 1",

    OverlayInput_lIn: "OverlayInput_lIn",

    OverlayInput_1Last: "OverlayInput_1Last",

    Overlayinput_10f: "Overlayinput_10f",

    OverlayInput_10ut: "OverlayInput_10ut",

    OverlayInput_1Zoom: "OverlayInput_1Zoom",

    OverlayInput2: "OverlayInput2",

    Overlayinout2In: "Overlayinout2In",

    Overlavinput2Last: "Overlavinput2Last",

    Overlayinput_2Off: "Overlayinput_2Off",

    Overlayinput20ut: "Overlayinput20ut",

    Overlayinput2Zoom: "Overlayinput2Zoom",

    Overlayinput3: "Overlayinput3",

    Overlayinput3in: "Overlayinput3in",

    Overlayinput_3Last: "Overlayinput_3Last",

    OverlayInput30ff: "OverlayInput30ff",

    OverlayInput30ut: "OverlayInput30ut",

    OverlayInput3Zoom: "OverlayInput3Zoom",

    OverlavInput4: "OverlavInput4",

    Overlayinput4In: "Overlayinput4In",

    OverlayInput_4Last: "OverlayInput_4Last",

    Overlayinput40ff: "Overlayinput40ff",

    Overlayinput40ut: "Overlayinput40ut",

    Overlavinput4Zoom: "Overlavinput4Zoom",

    OverlavInputAlIOff: "OverlavInputAlIOff",

    PreviewOverlayinout1: "PreviewOverlayinout1",

    PreviewOverlayinput: "PreviewOverlayinput",

    PreviewOverlayInput3: "PreviewOverlayInput3",

    PreviewOverlayInput4: "PreviewOverlayInput4",

    SetMultiViewOverlay: "SetMultiViewOverlay",
  });
}
