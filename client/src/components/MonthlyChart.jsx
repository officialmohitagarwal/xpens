import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function MonthlyChart({ expenses = [] }) {
  const monthlyData = [
    { month: "Jan", expense: 0 },
    { month: "Feb", expense: 0 },
    { month: "Mar", expense: 0 },
    { month: "Apr", expense: 0 },
    { month: "May", expense: 0 },
    { month: "Jun", expense: 0 },
    { month: "Jul", expense: 0 },
    { month: "Aug", expense: 0 },
    { month: "Sep", expense: 0 },
    { month: "Oct", expense: 0 },
    { month: "Nov", expense: 0 },
    { month: "Dec", expense: 0 },
  ];

  expenses.forEach((expense) => {
    const date = new Date(expense.date);

    const monthIndex = date.getMonth();

    monthlyData[monthIndex].expense +=
      expense.amount;
  });

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold">
            Monthly Expense Trend
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Expense analytics throughout the year
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm text-slate-300">
          2026
        </div>
      </div>

      {expenses.length === 0 ? (
        <div className="h-[320px] flex items-center justify-center text-slate-400">
          No expense data available
        </div>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <LineChart data={monthlyData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,.1)",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#22c55e",
              }}
              activeDot={{
                r: 8,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default MonthlyChart;