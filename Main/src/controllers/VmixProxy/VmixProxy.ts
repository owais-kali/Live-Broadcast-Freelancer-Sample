import axios, { AxiosResponse } from "axios";

export class VmixProxy{
    public static perform (req, res: any): any {
        console.log("Proxy!");
        return res.json({"msg": "Done!"})
    }
}