const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("First Page");
});

module.exports = Router;
