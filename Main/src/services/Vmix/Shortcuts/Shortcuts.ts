import axios, { AxiosResponse } from "axios";
import { env } from "@configs/env";

export interface IApi {
  Function: string;
  
  /**Value for the Function */
  Value: string;
  
  /**
   * Name of the GT file example
   *  @constant InGameGT.ELIMINATION;
   * */
  Input: string;

  Duration: number;

  Mix: number;

  Title: string;
  Description1: string;
  Description2: string;
}

export class Shortcuts {
  private prefix: string;

  constructor(url: string) {
    this.prefix = env.HTTP + "://" + url + "/api/?";
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
