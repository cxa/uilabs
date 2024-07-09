const express = require("express");
const path = require("node:path");

module.exports = (app) => {
  app.use("/uilabs", express.static(path.join(__dirname, "public")));
};
