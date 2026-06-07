import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ExpenseTable from "../components/ExpenseTable";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseModal from "../components/ExpenseModal";
import { Loader2 } from "lucide-react";

import api from "../services/api";

function Expenses() {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [dateFilter, setDateFilter] =
    useState("");

  const [expenses, setExpenses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [showAddModal, setShowAddModal] =
    useState(false);

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [selectedExpense, setSelectedExpense] =
    useState(null);

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
      toast.error(
        "Failed to load expenses"
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

  const handleEditClick = (
    expense
  ) => {
    setSelectedExpense({
      ...expense,
      date:
        expense.date?.split(
          "T"
        )[0],
    });

    setShowEditModal(true);
  };

  const handleUpdateExpense =
    async (data) => {
      try {
        await api.put(
          `/expenses/${selectedExpense._id}`,
          data
        );

        toast.success(
          "Expense updated successfully"
        );

        setShowEditModal(false);

        setSelectedExpense(null);

        fetchExpenses();
      } catch (error) {
        toast.error(
          "Failed to update expense"
        );
      }
    };

  const handleDelete = async (id) => {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this expense?"
      );

    if (!confirmed) return;

    try {
      await api.delete(
        `/expenses/${id}`
      );

      toast.success(
        "Expense deleted successfully"
      );

      fetchExpenses();
    } catch (error) {
      toast.error(
        "Failed to delete expense"
      );
    }
  };

  const filteredExpenses = expenses
    .filter((expense) => {
      const matchesSearch =
        expense.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesCategory =
        category === "All" ||
        expense.category === category;

      const matchesDate =
        !dateFilter ||
        expense.date.split("T")[0] ===
          dateFilter;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDate
      );
    })
    .sort(
      (a, b) =>
        new Date(b.date) -
        new Date(a.date)
    );

  const totalFilteredAmount =
    filteredExpenses.reduce(
      (sum, expense) =>
        sum +
        Number(expense.amount),
      0
    );

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Expenses
            </h1>

            <p className="text-slate-400 mt-2">
              Manage and track your
              expenses.
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
            "
          >
            + Add Expense
          </button>
        </div>

        {/* FILTERS */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={
              setSearchTerm
            }
          />

          <CategoryFilter
            category={category}
            setCategory={setCategory}
          />

          <input
            type="date"
            value={dateFilter}
            onChange={(e) =>
              setDateFilter(
                e.target.value
              )
            }
            style={{
              colorScheme: "dark",
            }}
            className="
              bg-white/5
              border border-white/10
              rounded-xl
              px-4 py-3
              text-white
            "
          />
        </div>

        {/* STATS */}

        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
            <p className="text-slate-400 text-sm">
              Expenses Found
            </p>

            <h3 className="text-2xl font-bold">
              {
                filteredExpenses.length
              }
            </h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
            <p className="text-slate-400 text-sm">
              Total Amount
            </p>

            <h3 className="text-2xl font-bold text-emerald-400">
              ₹
              {totalFilteredAmount.toLocaleString()}
            </h3>
          </div>
        </div>

        {/* TABLE */}

        {loading ? (
          <div className="text-center py-12 text-slate-400">
            Loading expenses...
          </div>
        ) : (
          <ExpenseTable
            expenses={
              filteredExpenses
            }
            onDelete={
              handleDelete
            }
            onEdit={
              handleEditClick
            }
          />
        )}

        {/* ADD MODAL */}

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

        {/* EDIT MODAL */}

        <ExpenseModal
          isOpen={showEditModal}
          onClose={() => {
            setShowEditModal(false);
            setSelectedExpense(
              null
            );
          }}
          title="Edit Expense"
        >
          {selectedExpense && (
            <ExpenseForm
              defaultValues={
                selectedExpense
              }
              onSubmit={
                handleUpdateExpense
              }
            />
          )}
        </ExpenseModal>
      </div>
    </MainLayout>
  );
}

export default Expenses;