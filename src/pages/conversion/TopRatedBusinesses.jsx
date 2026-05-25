import { useEffect, useState } from "react";
import BusinessCard from "../../components/business/BusinessCard";
import { apiGet } from "../../services/api";

const TopRatedBusinesses = () => {
  const [topRatedBusinesses, setTopRatedBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet("/businesses/top-rated")
      .then((response) => setTopRatedBusinesses(response.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl bg-[#111827] p-8 text-white">
          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-[#22C55E]">
            Top Rated
          </span>

          <h1 className="mt-5 text-3xl font-bold md:text-4xl">
            Top rated businesses
          </h1>

          <p className="mt-3 max-w-2xl text-gray-300">
            Discover highly rated and trusted businesses based on customer
            reviews and ratings.
          </p>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <p className="text-sm text-[#6B7280]">Total Businesses</p>
            <h3 className="mt-2 text-2xl font-bold text-[#1F2937]">
              {topRatedBusinesses.length}
            </h3>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <p className="text-sm text-[#6B7280]">Verified Businesses</p>
            <h3 className="mt-2 text-2xl font-bold text-[#1F2937]">
              {topRatedBusinesses.filter((business) => business.verified).length}
            </h3>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <p className="text-sm text-[#6B7280]">Highest Rating</p>
            <h3 className="mt-2 text-2xl font-bold text-[#1F2937]">
              {topRatedBusinesses[0]?.rating}
            </h3>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <p className="text-sm text-[#6B7280]">Popular City</p>
            <h3 className="mt-2 text-2xl font-bold text-[#1F2937]">
              Bhubaneswar
            </h3>
          </div>
        </div>

        <div className="mb-5 flex flex-col justify-between gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-[#1F2937]">
              Ranked businesses
            </h2>
            <p className="mt-1 text-sm text-[#6B7280]">
              Sorted by highest rating first
            </p>
          </div>

          <select className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#1F2937] outline-none focus:border-[#22C55E]">
            <option>All Categories</option>
            <option>Web Development</option>
            <option>Digital Marketing</option>
            <option>Home Services</option>
            <option>Event Management</option>
          </select>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center text-[#6B7280] shadow-sm">
            Loading top rated businesses...
          </div>
        ) : topRatedBusinesses.map((business, index) => (
          <div key={business.id} className="relative">
            <div className="absolute right-5 top-5 z-10 rounded-full bg-[#22C55E] px-3 py-1 text-xs font-bold text-white">
              #{index + 1}
            </div>
            <BusinessCard business={business} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default TopRatedBusinesses;
