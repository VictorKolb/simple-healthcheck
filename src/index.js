const axios = require("axios");
const schedule = require("node-schedule");
const TelegramBot = require("node-telegram-bot-api");
const config = require("./config.js");
const { token, targets, timeInterval, userId } = config;

function check() {
  targets.forEach(async (target) => {
    const { url, name } = target;
    try {
      const { data } = await axios.get(url);
      console.info(`Check server ${name}`);
      console.info(data);
    } catch (err) {
      console.error(err);
      sendAlert(target);
    }
  });
}

async function sendAlert(target) {
  const { name, ip } = target;
  try {
    const bot = new TelegramBot(token, {});

    await bot.sendMessage(
      userId,
      `Looks like server ${name} on IP ${ip} is down.`,
    );
  } catch (err) {
    console.error(err);
  }
}

schedule.scheduleJob(timeInterval, check);
