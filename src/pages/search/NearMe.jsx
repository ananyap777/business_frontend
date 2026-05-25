import { useState } from "react";
import BusinessCard from "../../components/business/BusinessCard";
import { apiGet } from "../../services/api";

const NearMe = () => {
  const [locationAllowed, setLocationAllowed] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadNearbyBusinesses = async (lat = 20.2961, lng = 85.8245) => {
    setLoading(true);
    setError("");

    try {
      const response = await apiGet("/businesses/near-me", {
        lat,
        lng,
        radiusKm: 50,
      });
      setBusinesses(response.data);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAllowLocation = () => {
    setLocationAllowed(true);
    if (!navigator.geolocation) {
      loadNearbyBusinesses();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) =>
        loadNearbyBusinesses(position.coords.latitude, position.coords.longitude),
      () => loadNearbyBusinesses()
    );
  };

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl bg-[#111827] p-8 text-white">
          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-[#22C55E]">
            Near Me
          </span>

          <h1 className="mt-5 text-3xl font-bold md:text-4xl">
            Find businesses near you
          </h1>

          <p className="mt-3 max-w-2xl text-gray-300">
            Allow location access to discover nearby businesses and service
            providers quickly.
          </p>

          {!locationAllowed && (
            <button
              onClick={handleAllowLocation}
              className="mt-6 rounded-lg bg-[#22C55E] px-5 py-3 text-sm font-semibold text-white hover:bg-green-600"
            >
              Allow Location Access
            </button>
          )}
        </div>

        {!locationAllowed ? (
          <div className="rounded-2xl border border-dashed border-[#E5E7EB] bg-white p-10 text-center">
            <h2 className="text-2xl font-bold text-[#1F2937]">
              Location permission required
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-[#6B7280]">
              Click the button above to simulate location access. Later this can
              be connected with browser geolocation and backend location APIs.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-5 flex flex-col justify-between gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-bold text-[#1F2937]">
                  Nearby businesses
                </h2>
                <p className="mt-1 text-sm text-[#6B7280]">
                  Showing businesses near your current location
                </p>
              </div>

              <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                Location Enabled
              </span>
            </div>

            <div className="mb-6 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1F2937]">
                Map Preview
              </h3>
              <div className="mt-4 flex h-56 items-center justify-center rounded-2xl bg-[#F9FAFB] text-[#6B7280]">
                Map integration will appear here
              </div>
            </div>

            {loading ? (
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center text-[#6B7280] shadow-sm">
                Loading nearby businesses...
              </div>
            ) : error ? (
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center text-red-600 shadow-sm">
                {error}
              </div>
            ) : businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </>
        )}
      </section>
    </main>
  );
};

export default NearMe;
