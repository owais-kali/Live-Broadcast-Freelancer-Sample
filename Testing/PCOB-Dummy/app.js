const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express()
const port = 10086

app.get('/gettotalplayerlist', (req, res) => {
  fs.readFile(path.resolve(__dirname, 'gettotalplayerlist.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data)
  });
})
  
app.listen(port, () => {
  console.log(`PCOB-Dummy listening on port ${port}`)
})