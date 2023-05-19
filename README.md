# LIVE-BROADCAST-AUTOMATION

## Introduction
This tool allows automating VMix actions using nodejs.

## Requirements
- Nodejs
- VMix

# App Structure

```bash
├── dist
├── public
├── src
│   ├── controllers
│   │   ├── Api
│   │   │   ├── Auth
│   │   │   │   ├── Login.ts
│   │   │   │   ├── RefreshToken.ts
│   │   │   │   └── Register.ts
│   │   │   └── Home.ts
│   │   ├── Auth
│   │   │   ├── Login.ts
│   │   │   ├── Logout.ts
│   │   │   ├── Register.ts
│   │   │   └── Social.ts
│   │   ├── Account.ts
│   │   └── Home.ts
│   ├── exception
│   │   ├── Handler.ts
│   │   └── NativeEvent.ts
│   ├── interfaces
│   │   ├── models
│   │   │   └── user.ts
│   │   └── vendors
│   │        ├── index.ts
│   │        ├── INext.ts
│   │        ├── IRequest.ts
│   │        └── IResponse.ts
│   ├── middlewares
│   │   ├── CORS.ts
│   │   ├── CsrfToken.ts
│   │   ├── Http.ts
│   │   ├── Kernel.ts
│   │   ├── Log.ts
│   │   ├── Statics.ts
│   │   ├── StatusMonitor.ts
│   │   └── View.ts
│   ├── models
│   │   └── User.ts
│   ├── providers
│   │   ├── App.ts
│   │   ├── Cache.ts
│   │   ├── Database.ts
│   │   ├── Express.ts
│   │   ├── Locals.ts
│   │   ├── Passport.ts
│   │   ├── Queue.ts
│   │   └── Routes.ts
│   ├── routes
│   │   ├── Api.ts
│   │   └── Web.ts
│   ├── services
│   │   └── strategies
│   │        ├── Google.ts
│   │        ├── Local.ts
│   │        └── Twitter.ts
│   └── index.ts
├── views
│   ├── includes
│   ├── modals
│   ├── pages
│   ├── partials
│   ├── static
│   │   ├── css/*.css
│   │   └── js/*.js
│   └── layout.pug
├── .env
├── .gitignore
├── nodemon.json
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json
```
# Src directory explained
1. <b>controllers:</b> This directory contains the controller functions for each route defined in the routes directory. The controller functions handle incoming requests, process them, and send a response back to the client.

2. <b>interfaces:</b> This directory contains TypeScript interfaces that define the shape of data objects used throughout the application. This can include interfaces for database models, request and response objects, and more.

3. <b>middlewares:</b> This directory contains custom middleware functions that can be used in routes. Middleware functions have access to the request and response objects and can perform operations such as logging, authentication, and data validation.

4. <b>models:</b> This directory contains the data models used in the application. These models typically represent data stored in a database and define the schema for that data.

5. <b>providers:</b> This directory contains files that provide shared functionality or utilities across different parts of the application. For example, a file in this directory might contain a function to generate a random ID or a configuration object for a third-party library.

6. <b>routes:</b> This directory contains the route definitions for the application. Each route is typically defined in a separate file and includes a URL path, HTTP method, and a reference to the corresponding controller function in the controllers directory.

7. <b>services:</b> This directory contains the business logic of the application. Service functions perform operations such as retrieving data from a database, performing calculations, or interacting with external APIs. Service functions are typically called from controller functions in response to incoming requests.

## Getting Started 
clone this repo 
```
git clone git@github.com:dheeraztiwari/LIVE-BROADCAST-AUTOMATION.git
```
checkout to develop branch
```
cd LIVE-BROADCAST-AUTOMATION 
git checkout develop
```

## Install node-modules PCOB-Dummy
```
cd PCOB-Dummy
npm install
```
## Run PCOB-Dummy
```
node app.js
```

## Install node-modules Vmix-Handler
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