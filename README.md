# LIVE-BROADCAST-AUTOMATION

## Introduction
This tool allows automating VMix actions using nodejs.

## Requirements
- Nodejs
- ReactJS
- VMix

## Getting Started 
clone this repo 
```
git clone https://github.com/owais-kali/Live-Broadcast-Freelancer-Sample.git
```
checkout to main branch
```
cd LIVE-BROADCAST-AUTOMATION 
git checkout main
```

## Install node-modules EC-Agent
```
cd EC-Agent
npm install
```
## Run EC-Agent
```
node run start
```

## Install node-modules Main
```
cd Vmix-Handler
npm install
```
## Run Vmix-Handler
```
node app.js
```

## Updating Changes
```
git checkout <your-name>
git merge owais-dev
```

<!-- Roadmap -->
## :compass: Roadmap

* [x] Trigger VMix Events Sample
* [x] Create a Dummy PCOB server for testing VMixHandler
* [x] Create Login and Logout APIs
* [x] Handle PCOB GetTotalPlayerList API
* [x] Trigger Events in VMIX