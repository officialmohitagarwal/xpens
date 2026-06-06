import {
  Wallet,
  TrendingUp,
  ReceiptIndianRupee,
  PieChart,
  ArrowUpRight,
} from "lucide-react";

function DashboardCards({ stats }) {
  const cards = [
    {
      title: "Total Expenses",
      value: `₹${stats?.totalExpenses?.toLocaleString() || 0}`,
      icon: Wallet,
      color:
        "from-violet-500/20 to-violet-700/20 border-violet-500/20",
      iconBg: "bg-violet-500/20",
    },
    {
      title: "Monthly Expenses",
      value: `₹${stats?.monthlyExpenses?.toLocaleString() || 0}`,
      icon: TrendingUp,
      color:
        "from-emerald-500/20 to-emerald-700/20 border-emerald-500/20",
      iconBg: "bg-emerald-500/20",
    },
    {
      title: "Categories",
      value: stats?.categoriesCount || 0,
      icon: PieChart,
      color:
        "from-sky-500/20 to-sky-700/20 border-sky-500/20",
      iconBg: "bg-sky-500/20",
    },
    {
      title: "Transactions",
      value: stats?.transactionsCount || 0,
      icon: ReceiptIndianRupee,
      color:
        "from-orange-500/20 to-orange-700/20 border-orange-500/20",
      iconBg: "bg-orange-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className={`
              bg-gradient-to-br
              ${card.color}
              border
              backdrop-blur-xl
              rounded-3xl
              p-5
              hover:-translate-y-1
              transition-all
              duration-300
            `}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-300 text-sm">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {card.value}
                </h2>
              </div>

              <div
                className={`
                  w-12 h-12
                  rounded-2xl
                  flex items-center justify-center
                  ${card.iconBg}
                `}
              >
                <Icon size={22} />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-5 text-sm text-emerald-400">
              <ArrowUpRight size={14} />
              <span>Live data</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardCards;