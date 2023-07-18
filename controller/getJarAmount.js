const path = require("path");
const fs = require("fs").promises;

const getJarAmount = async (req, res) => {
  try {
    const filePath = path.resolve("./jar/jarAmount.txt");
    const amount = await fs.readFile(filePath, "utf-8");
    res.status(200).json({ amount });
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = getJarAmount;
