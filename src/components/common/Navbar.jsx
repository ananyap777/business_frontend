import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-1.5 transition ${
      isActive ? "text-[#22C55E]" : "text-gray-300 hover:text-[#22C55E]"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#111827]/95 px-8 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#22C55E]/10 text-[#22C55E]">
            <Icon name="storefront" size={22} />
          </span>

          <span>
            Vyora<span className="text-[#22C55E]">.</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-5 text-sm font-medium md:flex">
          <NavLink to="/search" className={navLinkClass}>
            <Icon name="manage_search" size={18} />
            Search
          </NavLink>

          <NavLink to="/categories" className={navLinkClass}>
            <Icon name="category_search" size={18} />
            Categories
          </NavLink>

          <NavLink to="/compare-businesses" className={navLinkClass}>
            <Icon name="compare_arrows" size={18} />
            Compare
          </NavLink>

          <NavLink to="/top-rated-businesses" className={navLinkClass}>
            <Icon name="workspace_premium" size={18} />
            Top Rated
          </NavLink>

          <NavLink to="/trending-services" className={navLinkClass}>
            <Icon name="local_fire_department" size={18} />
            Trending
          </NavLink>

          <NavLink
            to="/instant-hire"
            className={({ isActive }) =>
              `flex items-center gap-1.5 rounded-lg px-4 py-2 font-semibold transition ${
                isActive
                  ? "bg-[#22C55E] text-white"
                  : "bg-[#22C55E] text-white hover:bg-green-600"
              }`
            }
          >
            <Icon name="bolt" size={18} />
            Instant Hire
          </NavLink>

          <NavLink to="/login" className={navLinkClass}>
            <Icon name="account_circle" size={18} />
            Login
          </NavLink>
        </div>

        <button className="rounded-lg border border-white/10 px-3 py-2 text-white md:hidden">
          <Icon name="menu" size={22} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;