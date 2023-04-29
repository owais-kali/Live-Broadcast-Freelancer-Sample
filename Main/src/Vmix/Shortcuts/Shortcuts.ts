import axios, { AxiosResponse } from "axios";
import { getConfig } from "../../env";

export interface IApi {
  Function: string;
  Value: string;
}

export class Shortcuts {
  private prefix: string;

  constructor(url: string) {
    this.prefix = getConfig().HTTP + "://" + url + "/api/?";
  }

  async SendAPIRequest(IApi: IApi) {
    const api: string = new URL(
      this.prefix + "Function=" + IApi.Function + "&Value=" + IApi.Value
    ).toString().replace('+','%2b');

    await axios.get(api).then(
      (res: AxiosResponse) => {
        console.log("response: " + res);
      },
      (err: AxiosResponse) => {
        console.log("err: " + err);
      }
    );
  }
}
