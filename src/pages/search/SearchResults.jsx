import { useEffect, useState } from "react";
import BusinessCard from "../../components/business/BusinessCard";
import SearchBar from "../../components/common/SearchBar";
import FilterSidebar from "../../components/filters/FilterSidebar";
import EmptyState from "../../components/common/EmptyState";
import ActionButton from "../../components/common/ActionButton";
import Icon from "../../components/common/Icon";
import { apiGet } from "../../services/api";

const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBusinesses = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await apiGet("/businesses", {
          search: searchTerm,
          category: selectedCategory,
          city: selectedCity,
          sortBy,
        });
        setBusinesses(response.data);
      } catch (requestError) {
        setError(requestError.message);
      } finally {
        setLoading(false);
      }
    };

    loadBusinesses();
  }, [searchTerm, selectedCategory, selectedCity, sortBy]);

  const hasActiveFilters = searchTerm || selectedCategory || selectedCity;

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedCity("");
    setSortBy("relevance");
  };

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-6 overflow-hidden rounded-3xl bg-[#111827] text-white shadow-sm">
          <div className="relative p-5 sm:p-8 lg:p-10">
            <div className="absolute right-0 top-0 hidden h-40 w-40 rounded-full bg-[#22C55E]/10 blur-3xl sm:block" />
            <div className="absolute bottom-0 left-10 hidden h-32 w-32 rounded-full bg-white/5 blur-2xl sm:block" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-xs font-semibold text-[#22C55E] sm:text-sm">
                <Icon name="travel_explore" size={17} />
                Search & Discovery
              </span>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_320px] lg:items-end">
                <div>
                  <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                    Find trusted businesses near you
                  </h1>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
                    Search services, compare businesses, and connect with
                    verified vendors quickly through Vyora.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                  <div>
                    <p className="text-lg font-bold text-white sm:text-2xl">
                      {businesses.length}+
                    </p>
                    <p className="mt-1 text-[11px] text-gray-400 sm:text-xs">
                      Listings
                    </p>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-white sm:text-2xl">
                      4.7
                    </p>
                    <p className="mt-1 text-[11px] text-gray-400 sm:text-xs">
                      Avg Rating
                    </p>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-white sm:text-2xl">
                      24/7
                    </p>
                    <p className="mt-1 text-[11px] text-gray-400 sm:text-xs">
                      Discovery
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[280px_1fr] lg:gap-6">
          <aside className="min-w-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          </aside>

          <section className="min-w-0">
            <div className="mb-5 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm sm:p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-bold text-[#1F2937]">
                      Search Results
                    </h2>

                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      {businesses.length} found
                    </span>
                  </div>

                  <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                    Browse businesses based on your search, category, and city.
                  </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 text-sm font-semibold text-[#1F2937] transition hover:bg-[#F9FAFB] sm:w-auto"
                    >
                      <Icon name="filter_alt_off" size={18} />
                      Clear
                    </button>
                  )}

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 text-sm text-[#1F2937] outline-none transition focus:border-[#22C55E] focus:ring-2 focus:ring-green-100 sm:w-auto"
                  >
                    <option value="relevance">Sort by Relevance</option>
                    <option value="rating">Highest Rated</option>
                    <option value="reviews">Most Reviews</option>
                    <option value="verified">Verified First</option>
                  </select>
                </div>
              </div>

              {hasActiveFilters && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F9FAFB] px-3 py-1.5 text-xs font-medium text-[#6B7280]">
                      <Icon name="search" size={14} />
                      {searchTerm}
                    </span>
                  )}

                  {selectedCategory && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F9FAFB] px-3 py-1.5 text-xs font-medium text-[#6B7280]">
                      <Icon name="category_search" size={14} />
                      {selectedCategory}
                    </span>
                  )}

                  {selectedCity && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F9FAFB] px-3 py-1.5 text-xs font-medium text-[#6B7280]">
                      <Icon name="location_city" size={14} />
                      {selectedCity}
                    </span>
                  )}
                </div>
              )}
            </div>

            {loading ? (
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center text-[#6B7280] shadow-sm">
                Loading businesses...
              </div>
            ) : error ? (
              <EmptyState
                icon="manage_search"
                title="Could not load businesses"
                description={error}
                action={
                  <ActionButton onClick={clearFilters} icon="filter_alt_off">
                    Reset Search
                  </ActionButton>
                }
              />
            ) : businesses.length > 0 ? (
              <div className="space-y-4">
                {businesses.map((business) => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
            ) : (
              <EmptyState
                icon="manage_search"
                title="No businesses found"
                description="Try changing your search keyword, category, or city filter to discover more businesses."
                action={
                  <ActionButton onClick={clearFilters} icon="filter_alt_off">
                    Clear Filters
                  </ActionButton>
                }
              />
            )}
          </section>
        </div>
      </section>
    </main>
  );
};

export default SearchResults;
