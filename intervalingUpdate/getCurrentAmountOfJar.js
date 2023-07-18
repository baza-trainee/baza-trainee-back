const fetch = require("node-fetch");
require("dotenv").config();
const fs = require("fs").promises;
const path = require("path");

const getCurrentAmountOfJar = async () => {
  const requestHeaders = new fetch.Headers({
    "X-Token": process.env.API_TOKEN,
  });
  const response = await fetch(process.env.API_URL, {
    method: "GET",
    headers: requestHeaders,
  });
  const user = await response.json();
  const jars = user.jars.filter(
    (oneJar) => oneJar.id === "ssy4f1mUyNdQkyJT-fcRq4PnkAjEg9s"
  );
  const amount = jars[0].balance.toString();
  const filePath = path.resolve("./jar/jarAmount.txt");
  await fs.writeFile(filePath, amount).catch((err) => console.log(err));
};

module.exports = getCurrentAmountOfJar;
