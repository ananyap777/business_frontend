import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-[#E5E7EB] bg-[#111827] px-8 shadow-sm">
      <Link to="/" className="text-2xl font-bold text-white">
        BusinessHub
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">
        <Link to="/search" className="text-gray-300 hover:text-[#22C55E]">
          Search
        </Link>

        <Link to="/categories" className="text-gray-300 hover:text-[#22C55E]">
          Categories
        </Link>

        <Link
          to="/top-rated-businesses"
          className="text-gray-300 hover:text-[#22C55E]"
        >
          Top Rated
        </Link>

        <Link
          to="/trending-services"
          className="text-gray-300 hover:text-[#22C55E]"
        >
          Trending
        </Link>

        <Link
          to="/instant-hire"
          className="rounded-lg bg-[#22C55E] px-4 py-2 font-semibold text-white hover:bg-green-600"
        >
          Instant Hire
        </Link>

        <Link to="/login" className="text-gray-300 hover:text-[#22C55E]">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;