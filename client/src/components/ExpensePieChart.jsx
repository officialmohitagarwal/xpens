import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#a855f7",
  "#f97316",
  "#ec4899",
  "#eab308",
  "#06b6d4",
];

function ExpensePieChart({ expenses = [] }) {
  const categoryMap = {};

  expenses.forEach((expense) => {
    categoryMap[expense.category] =
      (categoryMap[expense.category] || 0) +
      expense.amount;
  });

  const data = Object.keys(categoryMap).map(
    (category) => ({
      name: category,
      value: categoryMap[category],
    })
  );

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">
          Expense Categories
        </h2>

        <span className="text-xs text-slate-400">
          Category Wise
        </span>
      </div>

      {data.length === 0 ? (
        <div className="h-[280px] flex items-center justify-center text-slate-400">
          No expense data available
        </div>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={280}
        >
          <PieChart>
            <Pie
              data={data}
              innerRadius={55}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,.1)",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ExpensePieChart;