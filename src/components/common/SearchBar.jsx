const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-sm">
      <input
        type="text"
        placeholder="Search for services, businesses, or categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#6B7280] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-green-100"
      />

      <button className="rounded-lg bg-[#22C55E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;