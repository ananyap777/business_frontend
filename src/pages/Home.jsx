import { Link } from "react-router-dom";
import Icon from "../components/common/Icon";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#22C55E] shadow-sm">
              <Icon name="storefront" size={18} />
              Discover local businesses with Vyora
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-[#1F2937] md:text-6xl">
              Find trusted businesses, services, and vendors near you.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6B7280]">
              Vyora helps users search, compare, and connect with verified
              businesses through a clean and simple discovery experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/search"
                className="inline-flex items-center gap-2 rounded-xl bg-[#22C55E] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-600"
              >
                <Icon name="manage_search" size={19} />
                Start Searching
              </Link>

              <Link
                to="/instant-hire"
                className="inline-flex items-center gap-2 rounded-xl border border-[#22C55E] bg-white px-6 py-3 text-sm font-semibold text-[#22C55E] transition hover:bg-green-50"
              >
                <Icon name="bolt" size={19} />
                Instant Hire
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <p className="text-2xl font-bold text-[#1F2937]">500+</p>
                <p className="mt-1 text-sm text-[#6B7280]">Businesses</p>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <p className="text-2xl font-bold text-[#1F2937]">50+</p>
                <p className="mt-1 text-sm text-[#6B7280]">Categories</p>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <p className="text-2xl font-bold text-[#1F2937]">24/7</p>
                <p className="mt-1 text-sm text-[#6B7280]">Discovery</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <div className="rounded-[1.5rem] bg-[#111827] p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-[#22C55E]">
                  Smart Discovery
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#22C55E]">
                  <Icon name="travel_explore" size={22} />
                </span>
              </div>

              <h2 className="mt-8 text-2xl font-bold">
                Search. Compare. Connect.
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                A simple business discovery platform designed for users,
                vendors, and local service providers.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <Icon
                    name="manage_search"
                    size={22}
                    className="text-[#22C55E]"
                  />
                  <div>
                    <h3 className="font-semibold">Search Services</h3>
                    <p className="text-sm text-gray-400">
                      Find businesses by category, city, or locality.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <Icon
                    name="compare_arrows"
                    size={22}
                    className="text-[#22C55E]"
                  />
                  <div>
                    <h3 className="font-semibold">Compare Vendors</h3>
                    <p className="text-sm text-gray-400">
                      Compare ratings, services, price, and trust.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <Icon
                    name="verified"
                    size={22}
                    className="text-[#22C55E]"
                  />
                  <div>
                    <h3 className="font-semibold">Verified Businesses</h3>
                    <p className="text-sm text-gray-400">
                      Connect with reliable service providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;