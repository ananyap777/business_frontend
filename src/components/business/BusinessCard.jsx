const BusinessCard = ({ business }) => {
  return (
    <div className="mb-5 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-5">
        <div>
          <h3 className="text-2xl font-bold text-[#1F2937]">
            {business.name}
          </h3>
          <p className="mt-1 text-sm text-[#6B7280]">{business.category}</p>
        </div>

        {business.verified && (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Verified
          </span>
        )}
      </div>

      <p className="mt-4 leading-7 text-[#6B7280]">{business.description}</p>

      <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-[#1F2937] sm:grid-cols-2">
        <span>
          📍 {business.area}, {business.city}
        </span>
        <span>
          ⭐ {business.rating} ({business.reviews} reviews)
        </span>
        <span>💰 {business.priceRange}</span>
        <span>⏳ {business.experience}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {business.services.map((service, index) => (
          <span
            key={index}
            className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
          >
            {service}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-3">
        <button className="rounded-lg bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white hover:bg-green-600">
          Get Quote
        </button>

        <button className="rounded-lg border border-[#22C55E] px-4 py-2 text-sm font-semibold text-[#22C55E] hover:bg-green-50">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default BusinessCard;