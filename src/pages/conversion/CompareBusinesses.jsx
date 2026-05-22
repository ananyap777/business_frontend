import { useState } from "react";
import { businesses } from "../../data/businesses";

const CompareBusinesses = () => {
  const [selectedIds, setSelectedIds] = useState([1, 2]);

  const handleSelectBusiness = (businessId) => {
    if (selectedIds.includes(businessId)) {
      setSelectedIds(selectedIds.filter((id) => id !== businessId));
      return;
    }

    if (selectedIds.length >= 3) {
      alert("You can compare maximum 3 businesses at a time.");
      return;
    }

    setSelectedIds([...selectedIds, businessId]);
  };

  const selectedBusinesses = businesses.filter((business) =>
    selectedIds.includes(business.id)
  );

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl bg-[#111827] p-8 text-white">
          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-[#22C55E]">
            Compare Businesses
          </span>

          <h1 className="mt-5 text-3xl font-bold md:text-4xl">
            Compare businesses side by side
          </h1>

          <p className="mt-3 max-w-2xl text-gray-300">
            Select up to 3 businesses and compare ratings, services, location,
            price range, and verification status.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#1F2937]">
            Select businesses to compare
          </h2>

          <p className="mt-1 text-sm text-[#6B7280]">
            Selected {selectedBusinesses.length} of 3 businesses
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business) => {
              const isSelected = selectedIds.includes(business.id);

              return (
                <button
                  key={business.id}
                  onClick={() => handleSelectBusiness(business.id)}
                  className={`rounded-2xl border p-5 text-left transition ${
                    isSelected
                      ? "border-[#22C55E] bg-green-50"
                      : "border-[#E5E7EB] bg-[#F9FAFB] hover:border-[#22C55E]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-[#1F2937]">
                        {business.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#6B7280]">
                        {business.category}
                      </p>
                    </div>

                    {isSelected && (
                      <span className="rounded-full bg-[#22C55E] px-3 py-1 text-xs font-bold text-white">
                        Selected
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm text-[#6B7280]">
                    ⭐ {business.rating} • 📍 {business.area}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {selectedBusinesses.length > 0 ? (
          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
            <table className="w-full min-w-200 border-collapse text-left">
              <thead className="bg-[#111827] text-white">
                <tr>
                  <th className="p-4 text-sm font-semibold">Feature</th>
                  {selectedBusinesses.map((business) => (
                    <th key={business.id} className="p-4 text-sm font-semibold">
                      {business.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-4 font-semibold text-[#1F2937]">Category</td>
                  {selectedBusinesses.map((business) => (
                    <td key={business.id} className="p-4 text-[#6B7280]">
                      {business.category}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                  <td className="p-4 font-semibold text-[#1F2937]">Rating</td>
                  {selectedBusinesses.map((business) => (
                    <td key={business.id} className="p-4 text-[#6B7280]">
                      ⭐ {business.rating} ({business.reviews} reviews)
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-4 font-semibold text-[#1F2937]">Location</td>
                  {selectedBusinesses.map((business) => (
                    <td key={business.id} className="p-4 text-[#6B7280]">
                      {business.area}, {business.city}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                  <td className="p-4 font-semibold text-[#1F2937]">
                    Price Range
                  </td>
                  {selectedBusinesses.map((business) => (
                    <td key={business.id} className="p-4 text-[#6B7280]">
                      {business.priceRange}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-4 font-semibold text-[#1F2937]">
                    Experience
                  </td>
                  {selectedBusinesses.map((business) => (
                    <td key={business.id} className="p-4 text-[#6B7280]">
                      {business.experience}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                  <td className="p-4 font-semibold text-[#1F2937]">Verified</td>
                  {selectedBusinesses.map((business) => (
                    <td key={business.id} className="p-4 text-[#6B7280]">
                      {business.verified ? "Yes" : "No"}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-[#E5E7EB]">
                  <td className="p-4 font-semibold text-[#1F2937]">Services</td>
                  {selectedBusinesses.map((business) => (
                    <td key={business.id} className="p-4 text-[#6B7280]">
                      {business.services.join(", ")}
                    </td>
                  ))}
                </tr>

                <tr className="bg-[#F9FAFB]">
                  <td className="p-4 font-semibold text-[#1F2937]">Action</td>
                  {selectedBusinesses.map((business) => (
                    <td key={business.id} className="p-4">
                      <button className="rounded-lg bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white hover:bg-green-600">
                        Get Quote
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#E5E7EB] bg-white p-10 text-center">
            <h3 className="text-xl font-bold text-[#1F2937]">
              No businesses selected
            </h3>
            <p className="mt-2 text-[#6B7280]">
              Select businesses above to compare them.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default CompareBusinesses;