import axios, { AxiosResponse } from 'axios'
import { env } from 'src/configs/env'
import { IApi } from './IApi'

const VMIX_API_Prefix = env.HTTP + '://' + env.VMIX_URL + '/api/?'
const EC_Agent_PROXY_URL = env.HTTP + '://' + env.EC_Agent_URL + '/proxy/'

export async function SendAPIRequest(IApi: IApi) {
  let vmix_api: string = VMIX_API_Prefix

  vmix_api += 'Function=' + IApi.Function

  if (IApi.Value != '') vmix_api += '&Value=' + IApi.Value

  if (IApi.Title != '') vmix_api += '&SelectedName=' + IApi.Title

  if (IApi.Input != '') vmix_api += '&Input=' + IApi.Input

  const Instance = axios.create({
    withCredentials: false,
  })

  await Instance.post(EC_Agent_PROXY_URL, {
    api: vmix_api,
  })
}
