const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

vmix_url = "127.0.0.1:8088";
pcob_url = "127.0.0.1:10086";

function GetTotalPlayerList() {
  return axios.get("http://" + pcob_url + "/gettotalplayerlist");
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
