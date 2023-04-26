class PCOB_Handler {
    url = "" //PCOB URL
    playerInfoMap = new Map(); //PlayerInfoMap

    constructor(pcob_url) {
        this.url = pcob_url;
    }

    Start() {
        setInterval
    }

    // Get TotalPlayerList JSON data from PCOB
    GetTotalPlayerList() {
        return axios.get("http://" + pcob_url + "/gettotalplayerlist");
    }

    // Load all players in playerInfoMap
    GetTotalPlayerList().then(
    (obj) => {
    var playerInfoList = obj.data.playerInfoList;

    for (let i = 0; i < playerInfoList.length; i++) {
        const element = playerInfoList[i];

        playerInfoMap.set(element.uId, {
            Eliminated: false,
        })
    }
},
    (err) => {
        console.log(err);
        res.status(404).send("Oh uh, something went wrong");
    }
);

}

