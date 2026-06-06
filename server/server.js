

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());


app.use(
  "/api/expenses",
  require("./routes/expenseRoutes")
);

app.use(
  "/api/auth",
  authRoutes
);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});