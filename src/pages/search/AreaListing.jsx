import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BusinessCard from "../../components/business/BusinessCard";
import { apiGet } from "../../services/api";

const formatSlug = (slug) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const AreaListing = () => {
  const { areaName } = useParams();
  const formattedAreaName = formatSlug(areaName);
  const [areaBusinesses, setAreaBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiGet("/businesses", { area: formattedAreaName })
      .then((response) => setAreaBusinesses(response.data))
      .finally(() => setLoading(false));
  }, [formattedAreaName]);

  const nearbyAreas = [
    "Patia",
    "Saheed Nagar",
    "Jaydev Vihar",
    "Khandagiri",
    "Badambadi",
    "Gandhi Nagar",
  ];

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl bg-[#111827] p-8 text-white">
          <Link
            to="/search"
            className="text-sm font-semibold text-[#22C55E] hover:underline"
          >
            ← Back to Search
          </Link>

          <h1 className="mt-5 text-3xl font-bold md:text-4xl">
            Businesses in {formattedAreaName}
          </h1>

          <p className="mt-3 max-w-2xl text-gray-300">
            Find trusted local businesses and service providers around{" "}
            {formattedAreaName}.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#1F2937]">Nearby areas</h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area}
                to={`/area/${area.toLowerCase().replaceAll(" ", "-")}`}
                className="rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-medium text-[#1F2937] hover:border-[#22C55E] hover:text-[#22C55E]"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#1F2937]">
            Top businesses in {formattedAreaName}
          </h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            {areaBusinesses.length} businesses found
          </p>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center text-[#6B7280] shadow-sm">
            Loading businesses...
          </div>
        ) : areaBusinesses.length > 0 ? (
          areaBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-[#E5E7EB] bg-white p-10 text-center">
            <h3 className="text-xl font-bold text-[#1F2937]">
              No businesses found
            </h3>
            <p className="mt-2 text-[#6B7280]">
              Businesses for this area will appear here soon.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default AreaListing;
