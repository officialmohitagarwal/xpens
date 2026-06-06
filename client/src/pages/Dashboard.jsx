import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import DashboardCards from "../components/DashboardCards";
import MonthlyChart from "../components/MonthlyChart";
import ExpensePieChart from "../components/ExpensePieChart";
import RecentTransactions from "../components/RecentTransactions";

import ExpenseModal from "../components/ExpenseModal";
import ExpenseForm from "../components/ExpenseForm";

import api from "../services/api";

import toast from "react-hot-toast";

function Dashboard() {
  const [expenses, setExpenses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [showAddModal, setShowAddModal] =
    useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await api.get(
        "/expenses"
      );

      setExpenses(res.data);
    } catch (error) {
      console.error(
        "Dashboard Error:",
        error
      );

      toast.error(
        "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense =
    async (data) => {
      try {
        await api.post(
          "/expenses",
          data
        );

        toast.success(
          "Expense added successfully"
        );

        setShowAddModal(false);

        fetchExpenses();
      } catch (error) {
        toast.error(
          "Failed to add expense"
        );
      }
    };

  // TOTAL EXPENSES
  const totalExpenses = expenses.reduce(
    (sum, expense) =>
      sum + Number(expense.amount),
    0
  );

  // CURRENT MONTH EXPENSES
  const currentMonth =
    new Date().getMonth();

  const currentYear =
    new Date().getFullYear();

  const monthlyExpenses = expenses
    .filter((expense) => {
      const date = new Date(
        expense.date
      );

      return (
        date.getMonth() ===
          currentMonth &&
        date.getFullYear() ===
          currentYear
      );
    })
    .reduce(
      (sum, expense) =>
        sum + Number(expense.amount),
      0
    );

  // UNIQUE CATEGORIES
  const categoriesCount =
    new Set(
      expenses.map(
        (expense) =>
          expense.category
      )
    ).size;

  // TOTAL TRANSACTIONS
  const transactionsCount =
    expenses.length;

  const stats = {
    totalExpenses,
    monthlyExpenses,
    categoriesCount,
    transactionsCount,
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-[60vh]">
          <h2 className="text-xl text-slate-400">
            Loading Dashboard...
          </h2>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Monitor your expenses and
              analytics
            </p>
          </div>

          <button
            onClick={() =>
              setShowAddModal(true)
            }
            className="
              bg-emerald-500
              hover:bg-emerald-400
              text-black
              font-semibold
              px-5
              py-3
              rounded-2xl
              transition
              whitespace-nowrap
            "
          >
            + Add Expense
          </button>
        </div>

        {/* CARDS */}
        <DashboardCards
          stats={stats}
        />

        {/* CHARTS */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MonthlyChart
              expenses={expenses}
            />
          </div>

          <ExpensePieChart
            expenses={expenses}
          />
        </div>

        {/* RECENT TRANSACTIONS */}
        <RecentTransactions
          expenses={expenses}
        />

        {/* ADD EXPENSE MODAL */}
        <ExpenseModal
          isOpen={showAddModal}
          onClose={() =>
            setShowAddModal(false)
          }
          title="Add Expense"
        >
          <ExpenseForm
            onSubmit={
              handleAddExpense
            }
          />
        </ExpenseModal>
      </div>
    </MainLayout>
  );
}

export default Dashboard;