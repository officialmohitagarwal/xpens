function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <input
      type="text"
      placeholder="Search expenses..."
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(e.target.value)
      }
      className="
        w-full
        bg-white/5
        border border-white/10
        rounded-xl
        px-4 py-3
        text-white
        placeholder-slate-500
        outline-none
      "
    />
  );
}

export default SearchBar;