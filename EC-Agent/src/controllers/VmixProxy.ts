import axios, { AxiosError } from "axios";

export class VmixProxy {
  public static perform(req, res: any): any {
    axios.get(req.body.api).catch((e: AxiosError) => {
      console.log("Error: " + AxiosError);
    }).then((msg)=>{
        return res.json({ msg: "Done!" });
    });
  }
}
