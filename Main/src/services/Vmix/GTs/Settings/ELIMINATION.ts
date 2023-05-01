import { GT_Settings } from "@Vmix/GTs/GT_Settings";

export class ELIMINATION implements GT_Settings {
  Text = Object.freeze({
    ELIMS: { Name: "ELIMS.Text", Value: "" },
    RANK: { Name: "RANK.Text", Value: "" },
    TEAM_NAME: { Name: "TEAM NAME.Text", Value: "" },
  });

  Images = Object.freeze({
    TEAM_LOGO: { Name: "TEAM LOGO.Source", PATH: "" },
  });
}
