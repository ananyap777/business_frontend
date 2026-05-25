import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../../services/api";

const TrendingServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet("/services/trending")
      .then((response) => setServices(response.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl bg-[#111827] p-8 text-white">
          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-[#22C55E]">
            Trending Services
          </span>

          <h1 className="mt-5 text-3xl font-bold md:text-4xl">
            Services people are searching for
          </h1>

          <p className="mt-3 max-w-2xl text-gray-300">
            Explore popular services with high customer demand and quickly find
            vendors for your needs.
          </p>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center text-[#6B7280]">
            Loading trending services...
          </div>
        ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  {service.demand} Demand
                </span>

                <span className="text-sm text-[#6B7280]">
                  {service.category}
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#1F2937]">
                {service.name}
              </h2>

              <p className="mt-3 leading-7 text-[#6B7280]">
                {service.description}
              </p>

              <div className="mt-5 flex gap-3">
                <Link
                  to={`/search`}
                  className="rounded-lg bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white hover:bg-green-600"
                >
                  Find Vendors
                </Link>

                <Link
                  to={`/category/${service.category
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  className="rounded-lg border border-[#22C55E] px-4 py-2 text-sm font-semibold text-[#22C55E] hover:bg-green-50"
                >
                  View Category
                </Link>
              </div>
            </div>
          ))}
        </div>
        )}

        <div className="mt-10 rounded-3xl bg-[#111827] p-8 text-white">
          <h2 className="text-2xl font-bold">Need a service quickly?</h2>
          <p className="mt-2 max-w-2xl text-gray-300">
            Use Instant Hire to submit your requirement and connect with suitable
            vendors faster.
          </p>

          <Link
            to="/instant-hire"
            className="mt-5 inline-block rounded-lg bg-[#22C55E] px-5 py-3 text-sm font-semibold text-white hover:bg-green-600"
          >
            Go to Instant Hire
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TrendingServices;
