const express = require("express");
const transactionRoutes = express.Router();
// const transactions = express.Router();
const transactionsArr = require("../models/transactions.js");

// /transactions
transactionRoutes.get("/", (req, res) => {
  res.json(transactionsArr);
});

// /transactions/1
transactionRoutes.get("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArr[index]) {
    res.json(transactionsArr[index]);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// /transactions
transactionRoutes.post("/", (req, res) => {
  transactionsArr.push(req.body);
  res.json(transactionsArr[transactionsArr.length - 1]);
});

// /transactions/1
transactionRoutes.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArr[index]) {
    let removed = transactionsArr.splice(index, 1);
    res.json(removed[0]);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// /transactions/1
transactionRoutes.put("/:index", (req, res) => {
  let { index } = req.params;
  if (!transactionsArr[index]) {
    res.status(422).json({
      error: "Not found",
    });
  }

  let { date, trans, amount, type, category, description, tags } = req.body;
  if (date && trans && amount) {
    transactionsArr[index] = {
      date,
      trans,
      amount,
      type,
      category,
      description,
      tags,
    };
    res.json(transactionsArr[index]);
  } else {
    res.status(422).json({
      error: "**Please provide all mandatory fields",
    });
  }
});

module.exports = transactionRoutes;
