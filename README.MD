#HealthCheck
Simple node-js healthcheck with alert to telegram messenger.
## Requirements
* Node js
* Docker Compose
* Telegram bot token (@BotFather can give it)  
* Your telegram id to receive alert (use @jsondumpbot)

Don't forget press 'Start' in bot dialog to accept for bot messages.

##Setup
* Clone the repository
* In `src/config.js` set `targets` array, bot `token`, your `userId` and `timeInterval`:
```javascript
module.exports = {
  token: "yourbottoken",
  timeInterval: "0 * * * * *",
  userId: 123456789,
  targets: [
    {
      url: "https://example.com/healthcheck",
      name: "Server name one",
      ip: "33.33.33.224",
    },
    {
      url: "https://example2.com/healthcheck1",
      name: "Server name two",
      ip: "33.33.33.224",
    },
  ],
};
```
* Run it with `docker-compose up --build`

##FAQ
###Time interval
For change time interval check [node-schedule readme](https://github.com/node-schedule/node-schedule#cron-style-scheduling)

###Healthcheck route
You can use any working url. I use something like this:
```javascript
import express from "express";

const app = express();

app.get("/healthcheck", (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };

  try {
    res.send(healthcheck);
  } catch (e) {
    healthcheck.message = e;
    res.status(503).send(healthcheck);
  }
});
```  
