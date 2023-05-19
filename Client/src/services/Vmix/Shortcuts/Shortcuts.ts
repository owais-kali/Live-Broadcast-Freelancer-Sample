import axios, { AxiosResponse } from 'axios'
import { env } from 'src/configs/env'
import { IApi } from './IApi'

const VMIX_API_Prefix = env.HTTP + "://" + env.VMIX_URL + "/api/?";
const EC_Agent_PROXY_URL = env.HTTP + '://' + env.EC_Agent_URL + '/proxy/'

export async function SendAPIRequest(IApi: IApi) {
  const vmix_api: string = new String(
    VMIX_API_Prefix +
      'Function=' +
      IApi.Function +
      '&Value=' +
      IApi.Value +
      '&SelectedName=' +
      IApi.Title +
      '&Input=' +
      IApi.Input,
  )
    .toString()
    .replace('+', '%2b')

  const Instance = axios.create({
    withCredentials: false,
  })

  Instance.post(EC_Agent_PROXY_URL, {
    api: vmix_api,
  })
}
