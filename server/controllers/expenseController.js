const Expense = require("../models/Expense");

// CREATE
const createExpense = async (
  req,
  res
) => {
  try {
    const expense =
      await Expense.create({
        ...req.body,
        user: req.user.id,
      });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL USER EXPENSES
const getExpenses = async (
  req,
  res
) => {
  try {
    const expenses =
      await Expense.find({
        user: req.user.id,
      }).sort({
        createdAt: -1,
      });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET SINGLE
const getExpenseById = async (
  req,
  res
) => {
  try {
    const expense =
      await Expense.findOne({
        _id: req.params.id,
        user: req.user.id,
      });

    if (!expense) {
      return res.status(404).json({
        message:
          "Expense not found",
      });
    }

    res.json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE
const updateExpense = async (
  req,
  res
) => {
  try {
    const expense =
      await Expense.findOneAndUpdate(
        {
          _id: req.params.id,
          user: req.user.id,
        },
        req.body,
        {
          new: true,
        }
      );

    if (!expense) {
      return res.status(404).json({
        message:
          "Expense not found",
      });
    }

    res.json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE
const deleteExpense = async (
  req,
  res
) => {
  try {
    const expense =
      await Expense.findOneAndDelete(
        {
          _id: req.params.id,
          user: req.user.id,
        }
      );

    if (!expense) {
      return res.status(404).json({
        message:
          "Expense not found",
      });
    }

    res.json({
      message:
        "Expense deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
};