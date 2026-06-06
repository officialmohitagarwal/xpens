function CategoryFilter({
  category,
  setCategory,
}) {
  const categories = [
    "All",
    "Food",
    "Travel",
    "Bills",
    "Entertainment",
    "Shopping",
  ];

  return (
    <select
      value={category}
      onChange={(e) =>
        setCategory(e.target.value)
      }
      className="
        w-full
        bg-white/5
        border border-white/10
        rounded-xl
        px-4 py-3
        text-white
        outline-none
      "
    >
      {categories.map((item) => (
        <option
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;