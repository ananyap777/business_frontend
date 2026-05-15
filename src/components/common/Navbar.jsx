import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-1.5 rounded-lg px-3 py-2 transition ${
      isActive
        ? "bg-green-500/10 text-[#22C55E]"
        : "text-gray-300 hover:bg-white/5 hover:text-[#22C55E]"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-green-500/10 text-[#22C55E]"
        : "text-gray-300 hover:bg-white/5 hover:text-[#22C55E]"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#111827]/95 px-5 shadow-sm backdrop-blur md:px-8">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        {/* Brand */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#22C55E]/10 text-[#22C55E]">
            <Icon name="storefront" size={22} />
          </span>

          <span>
            Vyora<span className="text-[#22C55E]">.</span>
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 text-sm font-medium lg:flex">
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

        {/* Mobile Button - ChatGPT style sidebar icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-[#22C55E]/40 hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <Icon
              name="close"
              size={23}
              className="transition group-hover:text-[#22C55E]"
            />
          ) : (
            <span className="relative h-5 w-5 rounded-md border border-current transition group-hover:border-[#22C55E]">
              <span className="absolute left-[5px] top-0 h-full w-[1px] bg-current transition group-hover:bg-[#22C55E]" />
              <span className="absolute left-[9px] top-[5px] h-[2px] w-[6px] rounded-full bg-current transition group-hover:bg-[#22C55E]" />
              <span className="absolute left-[9px] top-[10px] h-[2px] w-[6px] rounded-full bg-current transition group-hover:bg-[#22C55E]" />
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mx-auto max-w-7xl overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[520px] pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
        }`}
      >
        <div className="mt-2 rounded-2xl border border-white/10 bg-[#111827] p-3 shadow-lg">
          <NavLink
            to="/search"
            onClick={closeMenu}
            className={mobileNavLinkClass}
          >
            <Icon name="manage_search" size={19} />
            Search
          </NavLink>

          <NavLink
            to="/categories"
            onClick={closeMenu}
            className={mobileNavLinkClass}
          >
            <Icon name="category_search" size={19} />
            Categories
          </NavLink>

          <NavLink
            to="/compare-businesses"
            onClick={closeMenu}
            className={mobileNavLinkClass}
          >
            <Icon name="compare_arrows" size={19} />
            Compare Businesses
          </NavLink>

          <NavLink
            to="/top-rated-businesses"
            onClick={closeMenu}
            className={mobileNavLinkClass}
          >
            <Icon name="workspace_premium" size={19} />
            Top Rated Businesses
          </NavLink>

          <NavLink
            to="/trending-services"
            onClick={closeMenu}
            className={mobileNavLinkClass}
          >
            <Icon name="local_fire_department" size={19} />
            Trending Services
          </NavLink>

          <NavLink
            to="/instant-hire"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            <Icon name="bolt" size={19} />
            Instant Hire
          </NavLink>

          <NavLink
            to="/login"
            onClick={closeMenu}
            className={mobileNavLinkClass}
          >
            <Icon name="account_circle" size={19} />
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;