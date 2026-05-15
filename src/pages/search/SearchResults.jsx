import { useMemo, useState } from "react";
import { businesses } from "../../data/businesses";
import BusinessCard from "../../components/business/BusinessCard";
import SearchBar from "../../components/common/SearchBar";
import FilterSidebar from "../../components/filters/FilterSidebar";

const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const filteredBusinesses = useMemo(() => {
    return businesses.filter((business) => {
      const searchText = searchTerm.toLowerCase();

      const matchesSearch =
        business.name.toLowerCase().includes(searchText) ||
        business.category.toLowerCase().includes(searchText) ||
        business.subCategory.toLowerCase().includes(searchText) ||
        business.city.toLowerCase().includes(searchText) ||
        business.area.toLowerCase().includes(searchText) ||
        business.services.some((service) =>
          service.toLowerCase().includes(searchText)
        );

      const matchesCategory = selectedCategory
        ? business.category === selectedCategory
        : true;

      const matchesCity = selectedCity ? business.city === selectedCity : true;

      return matchesSearch && matchesCategory && matchesCity;
    });
  }, [searchTerm, selectedCategory, selectedCity]);

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl bg-[#111827] p-8 text-white">
          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-[#22C55E]">
            Search & Discovery
          </span>

          <h1 className="mt-5 text-3xl font-bold md:text-4xl">
            Find trusted businesses near you
          </h1>

          <p className="mt-3 max-w-2xl text-gray-300">
            Search services, compare businesses, and connect with verified
            vendors quickly.
          </p>

          <div className="mt-6">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />

          <section>
            <div className="mb-5 flex flex-col justify-between gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-bold text-[#1F2937]">
                  Search Results
                </h2>
                <p className="mt-1 text-sm text-[#6B7280]">
                  {filteredBusinesses.length} businesses found
                </p>
              </div>

              <select className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#1F2937] outline-none focus:border-[#22C55E]">
                <option>Sort by Relevance</option>
                <option>Highest Rated</option>
                <option>Most Reviews</option>
                <option>Verified First</option>
              </select>
            </div>

            {filteredBusinesses.length > 0 ? (
              filteredBusinesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-[#E5E7EB] bg-white p-10 text-center">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  No businesses found
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Try changing your search keyword or filters.
                </p>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
};

export default SearchResults;