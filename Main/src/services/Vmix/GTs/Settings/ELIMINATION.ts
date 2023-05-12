import { GT_Settings } from "@Vmix/GTs/GT_Settings";
import { InGameGT } from "@configs/InGameGT";
import { BatchAPI } from "@services/Vmix/Shortcuts/BatchAPI";
import { Title } from "@services/Vmix/Shortcuts/Functions/Title";
import { IApi } from "@services/Vmix/Shortcuts/IApi";
import { SendAPIRequest } from "@services/Vmix/Shortcuts/Shortcuts";
import { AxiosResponse } from "axios";

export class ELIMINATION implements GT_Settings {
  promises: Promise<AxiosResponse<any, any>>[] = [];

  readonly Name: string = InGameGT.ELIMINATION;

  Text = Object.freeze({
    ELIMS: "ELIMS .Text",
    RANK: "RANK.Text",
    TEAM_NAME: "TEAM NAME .Text",
  });

  Images = Object.freeze({
    TEAM_LOGO: "TEAM LOGO.Source",
  });

  private TextValue = new Map<string, string>();
  private ImageValue = new Map<string, string>();

  constructor() {
    this.TextValue.set(this.Text.ELIMS, "");
    this.TextValue.set(this.Text.RANK, "");
    this.TextValue.set(this.Text.TEAM_NAME, "");

    this.ImageValue.set(this.Images.TEAM_LOGO, "");
  }

  SetText(name: string, value: string): void {
    if (this.TextValue.has(name)) {
      this.TextValue.set(name, value);

      let title: Title = new Title();
      title.SetText(this.Name, name, value);
      SendAPIRequest(title)
    }
  }
}
