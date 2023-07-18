const app = require("./app");
const job = require("./intervalingUpdate/cron");
const start = async () => {
  try {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
    job.start();
  } catch (error) {}
};
start();
