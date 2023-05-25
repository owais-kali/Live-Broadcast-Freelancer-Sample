import { env } from "@configs/env";
import { BatchAPI } from "@services/Vmix/Shortcuts/BatchAPI";
import axios, { AxiosResponse } from "axios";

const PCOB_API_Prefix = env.HTTP + "://" + env.PCOB_URL;

export function Start() {
  let reqs: Promise<AxiosResponse<any, any>>[] = [];
  reqs.push(axios.get(PCOB_API_Prefix + "/Test"));
  reqs.push(axios.get(PCOB_API_Prefix + "/Test"));
  reqs.push(axios.get(PCOB_API_Prefix + "/Test"));

  let batch_api: BatchAPI = new BatchAPI(reqs);
  batch_api.BatchExecute();
}
