// build your server here and require it from index.js
const express = require("express");
const resourceRouter = require("./resource/router");

const server = express();

server.use(express.json());

server.use("/api/resources", resourceRouter);

// eslint-disable-next-line
server.get("/api/", (req, res, next) => {
  res.json("hello from server.js");
});

// eslint-disable-next-line
server.use("/", (req, res, next) => {
  res.status(200).json("You hit the server");
});

// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(500).json({
    sageAdvice: "Finding the real error is 90% of the bug fix",
    error: err.message,
    stack: err.stack,
  });
});

module.exports = server;
