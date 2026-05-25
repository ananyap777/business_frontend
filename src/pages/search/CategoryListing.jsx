import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../../services/api";

const CategoryListing = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet("/categories")
      .then((response) => setCategories(response.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl bg-[#111827] p-8 text-white">
          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-[#22C55E]">
            Explore Categories
          </span>

          <h1 className="mt-5 text-3xl font-bold md:text-4xl">
            Browse businesses by category
          </h1>

          <p className="mt-3 max-w-2xl text-gray-300">
            Find services faster by exploring popular business categories and
            subcategories.
          </p>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center text-[#6B7280]">
            Loading categories...
          </div>
        ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-3xl">
                {category.icon}
              </div>

              <h2 className="text-xl font-bold text-[#1F2937]">
                {category.name}
              </h2>

              <p className="mt-2 text-sm text-[#6B7280]">
                {category.businessCount} businesses available
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.subCategories.slice(0, 3).map((subCategory) => (
                  <span
                    key={subCategory}
                    className="rounded-full bg-[#F9FAFB] px-3 py-1 text-xs font-medium text-[#6B7280]"
                  >
                    {subCategory}
                  </span>
                ))}
              </div>

              <Link
                to={`/category/${category.name.toLowerCase().replaceAll(" ", "-")}`}
                className="mt-5 inline-block rounded-lg bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white hover:bg-green-600"
              >
                Explore Category
              </Link>
            </div>
          ))}
        </div>
        )}
      </section>
    </main>
  );
};

export default CategoryListing;
