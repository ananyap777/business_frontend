import { useEffect, useState } from "react";
import Icon from "../components/common/Icon";
import StatCard from "../components/common/StatCard";
import SectionCard from "../components/common/SectionCard";
import ActionButton from "../components/common/ActionButton";
import { apiGet } from "../services/api";

const popularCategories = [
  {
    icon: "code_blocks",
    title: "Web Development",
    description: "Websites, dashboards, landing pages, and business portals.",
  },
  {
    icon: "campaign",
    title: "Digital Marketing",
    description: "SEO, ads, social media growth, and brand visibility.",
  },
  {
    icon: "home_repair_service",
    title: "Home Services",
    description: "Repair, cleaning, maintenance, and local service providers.",
  },
  {
    icon: "event_available",
    title: "Event Management",
    description: "Decoration, photography, catering, and event planning.",
  },
];

const steps = [
  {
    icon: "manage_search",
    title: "Search",
    description: "Find businesses by category, service, city, or locality.",
  },
  {
    icon: "compare_arrows",
    title: "Compare",
    description: "Check services, trust signals, ratings, and details.",
  },
  {
    icon: "bolt",
    title: "Connect",
    description: "Send a requirement or instantly connect with vendors.",
  },
];

const Home = () => {
  const [stats, setStats] = useState({
    businesses: "0",
    categories: "0",
    verified: "0",
  });
  const [featuredBusinesses, setFeaturedBusinesses] = useState([]);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const [businessResponse, featuredResponse, categoryResponse] = await Promise.all([
          apiGet("/businesses"),
          apiGet("/businesses/top-rated", { limit: 3 }),
          apiGet("/categories"),
        ]);

        const businesses = businessResponse.data || [];
        const featured = featuredResponse.data || [];
        setFeaturedBusinesses(featured);
        setStats({
          businesses: `${businesses.length}+`,
          categories: `${categoryResponse.data?.length || 0}+`,
          verified: `${businesses.filter((business) => business.verified).length}+`,
        });
      } catch {
        setFeaturedBusinesses([]);
      }
    };

    loadHomeData();
  }, []);

  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#22C55E] shadow-sm">
              <Icon name="storefront" size={18} />
              Discover trusted businesses with Vyora
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-[#1F2937] md:text-6xl">
              Search, compare, and connect with local businesses faster.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6B7280]">
              Vyora helps users discover verified services, compare businesses,
              and send requirements through a simple and modern experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ActionButton to="/search" icon="manage_search">
                Start Searching
              </ActionButton>

              <ActionButton to="/instant-hire" icon="bolt" variant="outline">
                Instant Hire
              </ActionButton>
            </div>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              <StatCard
                icon="storefront"
                value={stats.businesses}
                label="Businesses"
                description="Growing vendor discovery network."
              />

              <StatCard
                icon="category_search"
                value={stats.categories}
                label="Categories"
                description="Services across multiple business needs."
              />

              <StatCard
                icon="verified"
                value={stats.verified}
                label="Verified"
                description="Trusted vendors currently highlighted."
              />
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
                One platform for users and vendors.
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                A clean business automation frontend designed for search,
                vendor discovery, comparison, and quick lead conversion.
              </p>

              <div className="mt-6 space-y-3">
                {steps.map((step) => (
                  <div
                    key={step.title}
                    className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                  >
                    <Icon
                      name={step.icon}
                      size={22}
                      className="text-[#22C55E]"
                    />
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="text-sm text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold text-[#22C55E]">
                Popular Categories
              </span>
              <h2 className="mt-2 text-3xl font-bold text-[#1F2937]">
                Explore services people search often
              </h2>
            </div>

            <ActionButton to="/categories" icon="arrow_forward" variant="ghost">
              View All Categories
            </ActionButton>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {popularCategories.map((category) => (
              <SectionCard
                key={category.title}
                className="transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#22C55E]">
                  <Icon name={category.icon} size={24} />
                </span>

                <h3 className="mt-5 text-lg font-bold text-[#1F2937]">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  {category.description}
                </p>
              </SectionCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#111827] p-8 text-white shadow-sm">
          <span className="text-sm font-semibold text-[#22C55E]">
            How Vyora Works
          </span>

          <h2 className="mt-2 text-3xl font-bold">
            From discovery to connection in three steps
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-[#22C55E]">
                    <Icon name={step.icon} size={24} />
                  </span>

                  <span className="text-sm font-semibold text-gray-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold text-[#22C55E]">
                Featured Businesses
              </span>
              <h2 className="mt-2 text-3xl font-bold text-[#1F2937]">
                Trusted vendors to inspire discovery
              </h2>
            </div>

            <ActionButton to="/top-rated-businesses" icon="workspace_premium" variant="outline">
              View Top Rated
            </ActionButton>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredBusinesses.length > 0 ? featuredBusinesses.map((business) => (
              <SectionCard
                key={business.id || business.name}
                className="transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937]">
                      {business.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#6B7280]">
                      {business.category}
                    </p>
                  </div>

                  <span className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    <Icon name="verified" size={15} />
                    Verified
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#E5E7EB] pt-4 text-sm text-[#6B7280]">
                  <span className="flex items-center gap-1.5">
                    <Icon name="location_city" size={17} />
                    {business.city}
                  </span>

                  <span className="flex items-center gap-1.5 font-semibold text-[#1F2937]">
                    <Icon name="workspace_premium" size={17} />
                    {business.rating}
                  </span>
                </div>
              </SectionCard>
            )) : (
              <SectionCard className="md:col-span-3">
                <p className="text-center text-[#6B7280]">
                  Featured businesses will appear here after the backend loads.
                </p>
              </SectionCard>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#E5E7EB] bg-white p-8 text-center shadow-sm">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-[#22C55E]">
            <Icon name="bolt" size={28} />
          </span>

          <h2 className="mt-5 text-3xl font-bold text-[#1F2937]">
            Need a service quickly?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[#6B7280]">
            Use Vyora Instant Hire to share your requirement and connect faster
            with suitable vendors.
          </p>

          <div className="mt-7">
            <ActionButton to="/instant-hire" icon="bolt">
              Try Instant Hire
            </ActionButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
