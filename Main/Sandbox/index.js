const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

const vmix_url = "127.0.0.1:8088";
const pcob_url = "127.0.0.1:10086";

timer = setInterval(()=>{
  console.log("hello world");
}, 1000)

setTimeout(()=>{
  clearInterval(timer)
  console.log("clear")
}, 5000)

app.listen(port, () => {
  console.log(`VMix Handler listening on port ${port}`);
});