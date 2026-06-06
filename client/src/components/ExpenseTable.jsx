import {
  Pencil,
  Trash2,
} from "lucide-react";

function ExpenseTable({
  expenses,
  onDelete,
  onEdit,
}) {
  const formatDate = (dateString) => {
  return new Date(
    dateString
  ).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );
};

  return (
    <>
      {/* DESKTOP */}

      <div className="hidden lg:block bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4 text-left">
                  Category
                </th>

                <th className="p-4 text-left">
                  Payment
                </th>

                <th className="p-4 text-left">
                  Split
                </th>

                <th className="p-4 text-left">
                  Amount
                </th>

                <th className="p-4 text-left">
                  Date
                </th>

                <th className="p-4 text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {expenses.map(
                (expense) => (
                  <tr
                    key={
                      expense._id
                    }
                    className="border-t border-white/10 hover:bg-white/5"
                  >
                    <td className="p-4">
                      {
                        expense.title
                      }
                    </td>

                    <td className="p-4">
                      {
                        expense.category
                      }
                    </td>

                    <td className="p-4">
                      {
                        expense.paymentMode
                      }
                    </td>

                    <td className="p-4">
                      {
                        expense.splitType
                      }
                    </td>

                    <td className="p-4 text-emerald-400">
                      ₹
                      {expense.amount.toLocaleString()}
                    </td>

                    <td className="p-4 text-slate-400">
                      {formatDate(
                        expense.date
                      )}
                    </td>

                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => onEdit(expense)}
                          className="
                            bg-yellow-500/10
                            border border-yellow-500/20
                            p-2.5
                            rounded-xl
                            hover:bg-yellow-500/20
                            transition
                          "
                        >
                          <Pencil
                            size={18}
                            className="text-yellow-400"
                          />
                        </button>

                        <button
                          onClick={() =>
                            onDelete(expense._id)
                          }
                          className="
                            bg-red-500/10
                            border border-red-500/20
                            p-2.5
                            rounded-xl
                            hover:bg-red-500/20
                            transition
                          "
                        >
                          <Trash2
                            size={18}
                            className="text-red-400"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MOBILE */}

      <div className="lg:hidden space-y-4">
        {expenses.length === 0 ? (
          <div className="text-center py-10 text-slate-400">
            No expenses found
          </div>
        ) : (
          expenses.map(
            (expense) => (
              <div
                key={
                  expense._id
                }
                className="
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-4
                "
              >
                <div className="flex justify-between">
                  <h3 className="font-semibold">
                    {
                      expense.title
                    }
                  </h3>

                  <span className="text-emerald-400 font-bold">
                    ₹
                    {expense.amount.toLocaleString()}
                  </span>
                </div>

                <div className="mt-3 text-sm text-slate-400 space-y-1">
                  <p>
                    Category:{" "}
                    {
                      expense.category
                    }
                  </p>

                  <p>
                    Payment:{" "}
                    {
                      expense.paymentMode
                    }
                  </p>

                  <p>
                    Split:{" "}
                    {
                      expense.splitType
                    }
                  </p>

                  <p>
                    {formatDate(
                      expense.date
                    )}
                  </p>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() =>
                      onEdit(
                        expense
                      )
                    }
                    className="
                      flex-1
                      bg-blue-500/10
                      border border-blue-500/20
                      py-2
                      rounded-xl
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      onDelete(
                        expense._id
                      )
                    }
                    className="
                      flex-1
                      bg-red-500/10
                      border border-red-500/20
                      py-2
                      rounded-xl
                    "
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )
        )}
      </div>
    </>
  );
}

export default ExpenseTable;