import { env } from "@configs/env";
import fs from "fs";

const lol: string[] = [
  "Move_Multi_ViewOverlay",
  "MultiViewOverlay",
  "MultiViewOverlayOff",
  "MultiViewOverlayOn",
  "OverlayInput_1",
  "OverlayInput_lIn",
  "OverlayInput_1Last",
  "Overlayinput_10f",
  "OverlayInput_10ut",
  "OverlayInput_1Zoom",
  "OverlayInput2",
  "Overlayinout2In",
  "Overlavinput2Last",
  "Overlayinput_2Off",
  "Overlayinput20ut",
  "Overlayinput2Zoom",
  "Overlayinput3",
  "Overlayinput3in",
  "Overlayinput_3Last",
  "OverlayInput30ff",
  "OverlayInput30ut",
  "OverlayInput3Zoom",
  "OverlavInput4",
  "Overlayinput4In",
  "OverlayInput_4Last",
  "Overlayinput40ff",
  "Overlayinput40ut",
  "Overlavinput4Zoom",
  "OverlavInputAlIOff",
  "PreviewOverlayinout1",
  "PreviewOverlayinput",
  "PreviewOverlayInput3",
  "PreviewOverlayInput4",
  "SetMultiViewOverlay",
];

export function Sandbox1() {
  fs.readdirSync(env.GTZIP_INGAME_PATH).forEach((file) => {
    const filepath: String = env.GTZIP_INGAME_PATH + "\\" + file;
    const var_name = file;
    file = file.replaceAll(".gtzip", "")
    file = file.replaceAll(" ", "_")
    console.log(file + ":\"" +var_name+"\",");
  });
}
