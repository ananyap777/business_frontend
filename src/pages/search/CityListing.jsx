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

const CityListing = () => {
  const { cityName } = useParams();
  const formattedCityName = formatSlug(cityName);
  const [cityBusinesses, setCityBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiGet("/businesses", { city: formattedCityName })
      .then((response) => setCityBusinesses(response.data))
      .finally(() => setLoading(false));
  }, [formattedCityName]);

  const popularServices = [
    "Website Development",
    "SEO Services",
    "AC Repair",
    "Logo Design",
    "Wedding Planning",
    "Programming Classes",
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
            Businesses in {formattedCityName}
          </h1>

          <p className="mt-3 max-w-2xl text-gray-300">
            Discover trusted businesses, services, and vendors available in{" "}
            {formattedCityName}.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#1F2937]">
            Popular services in {formattedCityName}
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {popularServices.map((service) => (
              <span
                key={service}
                className="rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-medium text-[#1F2937]"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#1F2937]">
            Top businesses in {formattedCityName}
          </h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            {cityBusinesses.length} businesses found
          </p>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center text-[#6B7280] shadow-sm">
            Loading businesses...
          </div>
        ) : cityBusinesses.length > 0 ? (
          cityBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-[#E5E7EB] bg-white p-10 text-center">
            <h3 className="text-xl font-bold text-[#1F2937]">
              No businesses found
            </h3>
            <p className="mt-2 text-[#6B7280]">
              Businesses for this city will appear here soon.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default CityListing;
