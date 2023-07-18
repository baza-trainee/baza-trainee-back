const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const jarRouter = require("./routes/api/jar");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
const pathPublic = path.join(__dirname, "public");

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static(pathPublic));

app.use("/api/jar", jarRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
