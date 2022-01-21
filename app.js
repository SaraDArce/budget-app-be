//DEPENDENCIES - IMPORT EXPRESS(Func)
const express = require("express");

//CONFIG
const app = express();

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Budget App");
});

//EXPORT
module.exports = app;
