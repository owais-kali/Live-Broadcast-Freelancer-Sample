import axios from 'axios'
import * as env from 'src/components/env'

export const Instance = axios.create({
    withCredentials: env.axios_withCredentials,
});