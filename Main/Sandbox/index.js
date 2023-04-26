const { Worker } = require('worker_threads')

// Create a new worker
const worker = new Worker('./PCOB/PCOB-Handler.js')

// Send the contents to the worker
worker.postMessage("Start")

// Get result from the worker
worker.on('message', (result) => {
  console.log("Got message: "+result);
})