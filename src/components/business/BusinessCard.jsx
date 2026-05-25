import { useState } from "react";
import { apiPost } from "../../services/api";
import Icon from "../common/Icon";

const BusinessCard = ({ business }) => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    mobile: "",
    message: "",
  });
  const [quoteStatus, setQuoteStatus] = useState("");

  const handleQuoteRequest = async (event) => {
    event.preventDefault();
    setQuoteStatus("");
    try {
      await apiPost(`/businesses/${business.id}/quotes`, {
        ...quoteForm,
        service: business.subCategory,
      });
      setQuoteStatus("Quote request submitted successfully.");
      setQuoteForm({ name: "", mobile: "", message: "" });
    } catch (error) {
      setQuoteStatus(error.message);
    }
  };

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
        {(business.services || []).map((service, index) => (
          <span
            key={index}
            className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
          >
            {service}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={() => {
            setQuoteOpen(true);
            setQuoteStatus("");
          }}
          className="rounded-lg bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white hover:bg-green-600"
        >
          Get Quote
        </button>

        <button className="rounded-lg border border-[#22C55E] px-4 py-2 text-sm font-semibold text-[#22C55E] hover:bg-green-50">
          View Profile
        </button>
      </div>

      {quoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm">
          <form
            onSubmit={handleQuoteRequest}
            className="w-full max-w-md rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-lg dark:border-white/10 dark:bg-[#111827]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Request quote
                </h3>
                <p className="mt-1 text-sm text-[#6B7280]">{business.name}</p>
              </div>

              <button
                type="button"
                onClick={() => setQuoteOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#6B7280] transition hover:bg-[#F9FAFB] dark:border-white/10"
                aria-label="Close quote form"
              >
                <Icon name="close" size={19} />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={quoteForm.name}
                onChange={(event) =>
                  setQuoteForm((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-green-100"
              />

              <input
                type="tel"
                placeholder="Mobile number"
                value={quoteForm.mobile}
                onChange={(event) =>
                  setQuoteForm((current) => ({
                    ...current,
                    mobile: event.target.value,
                  }))
                }
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-green-100"
              />

              <textarea
                rows="4"
                placeholder="Tell the vendor what you need"
                value={quoteForm.message}
                onChange={(event) =>
                  setQuoteForm((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-green-100"
              />
            </div>

            {quoteStatus && (
              <p className="mt-4 text-sm font-semibold text-[#16A34A]">
                {quoteStatus}
              </p>
            )}

            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setQuoteOpen(false)}
                className="rounded-lg border border-[#E5E7EB] px-4 py-2 text-sm font-semibold text-[#1F2937] transition hover:bg-[#F9FAFB]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BusinessCard;
