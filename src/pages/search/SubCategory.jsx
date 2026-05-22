import { Link, useParams } from "react-router-dom";
import { categories } from "../../data/categories";
import { businesses } from "../../data/businesses";
import BusinessCard from "../../components/business/BusinessCard";

const formatSlug = (slug) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const SubCategory = () => {
  const { categoryName } = useParams();

  const formattedCategoryName = formatSlug(categoryName);

  const category = categories.find(
    (item) => item.name.toLowerCase() === formattedCategoryName.toLowerCase()
  );

  const categoryBusinesses = businesses.filter(
    (business) =>
      business.category.toLowerCase() === formattedCategoryName.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl bg-[#111827] p-8 text-white">
          <Link
            to="/categories"
            className="text-sm font-semibold text-[#22C55E] hover:underline"
          >
            ← Back to Categories
          </Link>

          <h1 className="mt-5 text-3xl font-bold md:text-4xl">
            {formattedCategoryName}
          </h1>

          <p className="mt-3 max-w-2xl text-gray-300">
            Explore subcategories and trusted businesses under{" "}
            {formattedCategoryName}.
          </p>
        </div>

        {category && (
          <div className="mb-8 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1F2937]">
              Popular subcategories
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {category.subCategories.map((subCategory) => (
                <span
                  key={subCategory}
                  className="rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-medium text-[#1F2937]"
                >
                  {subCategory}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#1F2937]">
            Top businesses in {formattedCategoryName}
          </h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            {categoryBusinesses.length} businesses found
          </p>
        </div>

        {categoryBusinesses.length > 0 ? (
          categoryBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-[#E5E7EB] bg-white p-10 text-center">
            <h3 className="text-xl font-bold text-[#1F2937]">
              No businesses found
            </h3>
            <p className="mt-2 text-[#6B7280]">
              Businesses for this category will appear here soon.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default SubCategory;