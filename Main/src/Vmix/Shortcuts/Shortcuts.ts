import { getConfig } from "../../env"

export interface IApi{
    Function: string
    Value: string
}

export class Shortcuts{
    prefix: string;
    
    constructor(url: string){
        this.prefix = getConfig().HTTP+'://'+url+'/api/?'
    }

    CreateAPIRequest(IApi: IApi): string{
        const api: string = this.prefix+'Function='+IApi.Function+'&Value='+IApi.Value;
        return api;
    }
}