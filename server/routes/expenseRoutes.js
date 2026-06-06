const express = require("express");

const router = express.Router();

const {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

const authMiddleware = require(
  "../middleware/authMiddleware"
);

router.post(
  "/",
  authMiddleware,
  createExpense
);

router.get(
  "/",
  authMiddleware,
  getExpenses
);

router.get(
  "/:id",
  authMiddleware,
  getExpenseById
);

router.put(
  "/:id",
  authMiddleware,
  updateExpense
);

router.delete(
  "/:id",
  authMiddleware,
  deleteExpense
);

module.exports = router;