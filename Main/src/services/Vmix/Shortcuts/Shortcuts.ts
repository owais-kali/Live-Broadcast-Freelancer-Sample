import axios, { AxiosResponse } from "axios";
import { env } from "@configs/env";
import { IApi } from "./IApi";

const VMIX_API_Prefix = env.HTTP + "://" + env.VMIX_URL + "/api/?";

export async function SendAPIRequest(IApi: IApi) {
  const api: string = new String(
    VMIX_API_Prefix +
      "Function=" +
      IApi.Function +
      "&Value=" +
      IApi.Value +
      "&Input=" +
      IApi.Input
  )
    .toString()
    .replace("+", "%2b");

  console.log("api: " + api);

  await axios.get(api).then(
    (res: AxiosResponse) => {
      console.log("response: " + res);
    },
    (err: AxiosResponse) => {
      console.log("err: " + err);
    }
  );
}
