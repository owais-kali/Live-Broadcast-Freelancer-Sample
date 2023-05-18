import axios, { AxiosResponse } from "axios";
import { env } from "src/configs/env";
import { IApi } from "./IApi";

const VMIX_API_Prefix = env.HTTP + "://" + env.VMIX_URL + "/api/?";

export async function SendAPIRequest(
  IApi: IApi
){
  const api: string = new String(
    VMIX_API_Prefix +
      "Function=" +
      IApi.Function +
      "&Value=" +
      IApi.Value +
      "&SelectedName=" +
      IApi.Title +
      "&Input=" +
      IApi.Input
  )
    .toString()
    .replace("+", "%2b");

  const Instance = axios.create({
      withCredentials: false,
  });
  
  //Instance.get(api);
  
  Instance.post('http://localhost:4040/proxy');
}
