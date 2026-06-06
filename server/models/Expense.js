const mongoose = require("mongoose");

const expenseSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      amount: {
        type: Number,
        required: true,
        min: 1,
      },

      category: {
        type: String,
        required: true,
      },

      date: {
        type: Date,
        required: true,
      },

      paymentMode: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        default: "",
      },

      splitType: {
        type: String,
        default: "Self",
      },

      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Expense",
  expenseSchema
);