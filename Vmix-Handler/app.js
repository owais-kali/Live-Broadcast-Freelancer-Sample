const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

vmix_url="127.0.0.1:8088"

app.get('/', (req, res) => {
  try {
    res.send(axios.get("http://"+vmix_url+"/api/?Function=Fade&Input=1"))
  } catch (error) {
    console.error(error)
  }
})

app.listen(port, () => {
  console.log(`VMix Handler listening on port ${port}`)
})