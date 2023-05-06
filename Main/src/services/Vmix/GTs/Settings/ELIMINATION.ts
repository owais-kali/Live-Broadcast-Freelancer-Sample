import { GT_Settings } from "@Vmix/GTs/GT_Settings";

export class ELIMINATION implements GT_Settings {
  Text = Object.freeze({
    ELIMS: "ELIMS.Text",
    RANK: "RANK.Text",
    TEAM_NAME: "TEAM NAME.Text",
  });

  Images = Object.freeze({
    TEAM_LOGO: "TEAM LOGO.Source",
  });

  TextValue = new Map<string, string>();
  ImageValue = new Map<string, string>();

  constructor() {
    this.TextValue.set(this.Text.ELIMS, "");
    this.TextValue.set(this.Text.RANK, "");
    this.TextValue.set(this.Text.TEAM_NAME, "");

    this.ImageValue.set(this.Images.TEAM_LOGO, "");
  }

  SetText(name: string, value: string): void{
    if(this.TextValue.has(name)){
      this.TextValue.set(name, value);
    }
  }
}
