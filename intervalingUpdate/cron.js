const CronJob = require("cron").CronJob;
const getCurrentAmountOfJar = require("./getCurrentAmountOfJar.js");

const job = new CronJob("0 */5 * * * *", function () {
  getCurrentAmountOfJar();
});

module.exports = job;
