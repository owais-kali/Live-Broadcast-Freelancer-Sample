import axios from "axios";

export class VmixProxy{
    public static perform (req, res: any): any {
        axios.get(req.body.api);
        return res.json({"msg": "Done!"})
    }
}