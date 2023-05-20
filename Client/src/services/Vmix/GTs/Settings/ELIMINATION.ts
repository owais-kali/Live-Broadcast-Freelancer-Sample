import { GT_Settings } from 'src/services/Vmix/GTs/GT_Settings'
import { InGameGT } from 'src/configs/InGameGT'
import { BatchAPI } from 'src/services/Vmix/Shortcuts/BatchAPI'
import { Title } from 'src/services/Vmix/Shortcuts/Functions/Title'
import { IApi } from 'src/services/Vmix/Shortcuts/IApi'
import { SendAPIRequest } from 'src/services/Vmix/Shortcuts/Shortcuts'
import { AxiosResponse } from 'axios'

export class ELIMINATION implements GT_Settings {
  promises: Promise<AxiosResponse<any, any>>[] = []

  readonly Name: string = InGameGT.ELIMINATION

  Text = Object.freeze({
    ELIMS: 'ELIMS.Text',
    RANK: 'RANK.Text',
    TEAM_NAME: 'TEAM_NAME.Text',
  })

  Images = Object.freeze({
    TEAM_LOGO: 'TEAM LOGO.Source',
  })

  private TextValue = new Map<string, string>()
  private ImageValue = new Map<string, string>()

  constructor() {
    this.TextValue.set(this.Text.ELIMS, '')
    this.TextValue.set(this.Text.RANK, '')
    this.TextValue.set(this.Text.TEAM_NAME, '')

    this.ImageValue.set(this.Images.TEAM_LOGO, '')
  }

  async SetText(name: string, value: string) {
    if (this.TextValue.has(name)) {
      this.TextValue.set(name, value)

      let title: Title = new Title()

      if (name == this.Text.RANK) title.SetText(this.Name, name, '%23' + value)
      else title.SetText(this.Name, name, value)
    }
  }
}
