const axios = require("axios");

export class VMix_Handler {
    url: string;

    constructor(vmix_url: string) {
        this.url = vmix_url;
    }

    Elimination(playerName: string) {
        console.log("player: " + JSON.stringify(playerName) + " is dead!");
            axios.get("http://" + this.url + "/api/?Function=SetText&Input=elimination.gtzip&SelectedName=RANK.Text&Value=" + playerName).then((res: JSON) => {
                console.log(res);
            });
        }

}