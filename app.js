//DEPENDENCIES - IMPORT EXPRESS(Func)
const express = require("express");

//CONFIG
const app = express();

const transactionsController = require("./controllers/transactionsController.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Your Budget App");
});

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

//EXPORT
module.exports = app;
