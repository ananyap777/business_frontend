const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  selectedCity,
  setSelectedCity,
}) => {
  return (
    <aside className="h-fit rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <h3 className="mb-5 text-xl font-bold text-[#1F2937]">Filters</h3>

      <div className="mb-5">
        <label className="mb-2 block text-sm font-semibold text-[#1F2937]">
          Category
        </label>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#1F2937] outline-none focus:border-[#22C55E]"
        >
          <option value="">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Home Services">Home Services</option>
          <option value="Event Management">Event Management</option>
          <option value="Education">Education</option>
          <option value="Design & Branding">Design & Branding</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1F2937]">
          City
        </label>

        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#1F2937] outline-none focus:border-[#22C55E]"
        >
          <option value="">All Cities</option>
          <option value="Bhubaneswar">Bhubaneswar</option>
          <option value="Cuttack">Cuttack</option>
          <option value="Berhampur">Berhampur</option>
        </select>
      </div>
    </aside>
  );
};

export default FilterSidebar;