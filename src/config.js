module.exports = {
  token: "bot token",
  timeInterval: "0 * * * * *",
  userId: "user id number or array",
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
