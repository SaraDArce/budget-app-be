// const express = require("express");
// const transactionsArr = require("../models/transactions.js");
// const transactions = express.Router();

// transactions.get("/", (_, res) => {
//   res.json(transactionsArr);
// });

// transactions.post("/", (req, res) => {
//   res.json(transactionsArr.push(req.body));
// });

// transactions.get("/:index", (req, res) => {
//   const { index } = req.params;
//   transactionsArr[index] ? res.json(transactionsArr[index]) : res.redirect("/");
// });

// transactions.delete("/:index", (req, res) => {
//   const { index } = req.params;
//   transactionsArr[index]
//     ? res.json(transactionsArr.splice(index, 1))
//     : res.status(404).json({ error: "index not found" });
// });

// module.exports = transactions;
