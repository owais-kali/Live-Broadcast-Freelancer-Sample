const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

const vmix_url = "127.0.0.1:8088";
const pcob_url = "127.0.0.1:10086";

// Get TotalPlayerList JSON data from PCOB
function GetTotalPlayerList() {
  return axios.get("http://" + pcob_url + "/gettotalplayerlist");
}

// Process TotalPlayerList
function ProcessTotalPlayerList() {
  GetTotalPlayerList().then(
    (obj) => {
      var playerInfoList = obj.data.playerInfoList;
      for (let i = 0; i < playerInfoList.length; i++) {
        const element = playerInfoList[i];
        
        // Check LiveState
        const liveState = element.liveState;
        if(liveState==5){
          Elimination(element.playerName);
        }
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
    axios.get("http://" + vmix_url + "/api/?Function=SetText&Input=elimination.gtzip&SelectedName=RANK.Text&Value="+playerName).then((res)=>{
      console.log(res);
    }, (err)=>{

    })

    axios.get("http://" + vmix_url + "/api/?Function=Fade&Input=elimination.gtzip");
  } catch (error) {
    console.error(error);
  }
}

setInterval(()=>{
  ProcessTotalPlayerList();
}, 1000)

app.get("/Test_API", (req, res) => {    

})

app.get("/Fade", (req, res) => {
  try {
    res.send(axios.get("http://" + vmix_url + "/api/?Function=Fade&Input=1"));
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`VMix Handler listening on port ${port}`);
});
 
