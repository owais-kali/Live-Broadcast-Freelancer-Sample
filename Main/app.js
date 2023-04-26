const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

const vmix_url = "127.0.0.1:8088";
const pcob_url = "127.0.0.1:10086";

// Process TotalPlayerList
function ProcessTotalPlayerList() {
  GetTotalPlayerList().then(
    (obj) => {
      var playerInfoList = obj.data.playerInfoList;
      for (let i = 0; i < playerInfoList.length; i++) {
        const element = playerInfoList[i];
        
        // Check LiveState
        const liveState = element.liveState;
        if(liveState==5 && playerInfoMap.get(element.uId).Eliminated == false){
          playerInfoMap.get(element.uId).Eliminated = true;
          Elimination(element.playerName);
        }


        // //Check Dead count
        // const deadcount = element.killNumByGrenade;
        // for(i=0 ; i<= deadcount;i++){
        //   console.count(Grenadier(element.playerName));
        // }

        // //Team 
        // const team = element.Uid;
        // console.count(MatchIntro(element.team));


      } 
    },
    (err) => {
      console.log(err);
      res.status(404).send("Oh uh, something went wrong");
    }
  );
}

// Example API on how to get GetTotalPlayerList json data
app.get("/ExampleGetTotalPlayerList", (req, res) => {
  GetTotalPlayerList().then(
    (obj) => {
      console.log(obj.data); // Log data in console
      res.send(obj.data); // send data as response
    },
    (err) => {
      console.log(err);
      res.status(404).send("Oh uh, something went wrong");
    }
  );
});

function Elimination(playerName){
  console.log("player: "+JSON.stringify(playerName)+" is dead!");
  try {
    axios.get("http://" + vmix_url + "/api/?Function=SetText&Input=elimination2.gtzip&SelectedName=RANK.Text&Value="+playerName).then((res)=>{
      console.log(res);
    }, (err)=>{

    })

    // axios.get("http://" + vmix_url + "/api/?Function=Fade&Input=elimination.gtzip");
  } catch (error) {
    console.error(error);
  }
}

app.get("/Test_API", (req, res) => {    

})

app.get("/Fade", (req, res) => {
  try {
    res.send(axios.get("http://" + vmix_url + "/api/?Function=Fade&Input=1"));
  } catch (error) {
    console.error(error);
  }
});

setInterval(()=>{
  ProcessTotalPlayerList();
}, 1000)

const worker = new Worker('./PCOB-Handler.js', pcob_url);
worker.postMessage("Start")

worker.on('message', (result) => {
  
})

app.listen(port, () => {
  console.log(`VMix Handler listening on port ${port}`);
});