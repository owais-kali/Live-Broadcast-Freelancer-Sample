import axios from "axios";
import PCOB_Server from "../providers/PCOB-Dummy/PCOB_Server"

import * as gettotalplayerlist from "./../providers/PCOB-Dummy/gettotalplayerlist"

export class PCOB_Dummy{
    public static start (req, res: any): any {
        PCOB_Server.start();
        return res.json({"msg": "PCOB DUMMY Server Started!"})
    }

    public static stop (req, res: any): any {
        PCOB_Server.stop();
        return res.json({"msg": "PCOB DUMMY Server Stopped!"})
    }

    public static update_gettotalplayerlist (req, res: any): any {
        gettotalplayerlist.UpdateCurrentPlayerInfo(req.body);
        return res.json({"msg": "Updated gettotalplayerlist!"})
    }
}