function RecentTransactions({
  expenses = [],
}) {
  const recentExpenses = [...expenses]
    .sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    )
    .slice(0, 5);

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-lg font-semibold">
            Recent Transactions
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Latest expense activity
          </p>
        </div>

        <span className="text-green-400 text-sm">
          {recentExpenses.length} Records
        </span>
      </div>

      {recentExpenses.length === 0 ? (
        <div className="h-40 flex items-center justify-center text-slate-400">
          No transactions available
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-slate-400 text-sm border-b border-white/10">
                <th className="text-left py-3">
                  Title
                </th>

                <th className="text-left py-3">
                  Category
                </th>

                <th className="text-left py-3">
                  Amount
                </th>

                <th className="text-left py-3">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {recentExpenses.map(
                (expense) => (
                  <tr
                    key={expense._id}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="py-4 font-medium">
                      {expense.title}
                    </td>

                    <td className="py-4">
                      <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm">
                        {expense.category}
                      </span>
                    </td>

                    <td className="py-4 text-green-400 font-medium">
                      ₹{expense.amount}
                    </td>

                    <td className="py-4 text-slate-400">
                      {new Date(
                        expense.date
                      ).toLocaleDateString(
                        "en-IN",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RecentTransactions;