import axios from "axios";

export class PCOB_Dummy{
    public static start (req, res: any): any {
        
        return res.json({"msg": "PCOB DUMMY Server Started!"})
    }

    public static stop (req, res: any): any {
        
        return res.json({"msg": "PCOB DUMMY Server Stopped!"})
    }

    public static update_gettotalplayerlist (req, res: any): any {
        
        return res.json({"msg": "Updated gettotalplayerlist!"})
    }
}