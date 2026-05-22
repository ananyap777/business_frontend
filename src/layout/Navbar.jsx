// import { Icon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../components/common/Icon";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-xl px-3 py-2 transition duration-200 ${
      isActive
        ? "bg-green-500/10 text-[#22C55E]"
        : "text-gray-300 hover:bg-white/5 hover:text-[#22C55E]"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-green-500/10 text-[#22C55E]"
        : "text-gray-300 hover:bg-white/5 hover:text-[#22C55E]"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#111827]/95 px-4 shadow-md backdrop-blur-md md:px-8">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <img
            src="/src/assets/image.png"
            alt="Vyora Logo"
            className="h-12 w-12 object-contain"
          />

          <h1 className="text-2xl font-bold text-white">
            Vyora<span className="text-[#22C55E]">.</span>
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-1 text-sm font-medium xl:flex">
          
          <NavLink to="/search" className={navLinkClass}>
            <Icon name="manage_search" size={18}/>
            <span className="block">Search</span>
          </NavLink>

          <NavLink to="/categories" className={navLinkClass}>
            <Icon name="category_search" size={18} />
            <span className="block">Categories</span>
          </NavLink>

          <NavLink to="/compare-businesses" className={navLinkClass}>
            <Icon name="compare_arrows" size={18} />
            <span className="block">Compare</span>
          </NavLink>

          <NavLink to="/top-rated-businesses" className={navLinkClass}>
            <Icon name="workspace_premium" size={18} />
            <span className="block">Top Rated</span>
          </NavLink>

          <NavLink to="/trending-services" className={navLinkClass}>
            <Icon name="local_fire_department" size={18} />
            <span className="block">Trending</span>
          </NavLink>

          <NavLink
            to="/instant-hire"
            className="ml-2 flex items-center gap-2 rounded-xl bg-[#22C55E] px-4 py-2 font-semibold text-white transition hover:bg-green-600"
          >
            <Icon name="bolt" size={18} />
            <span className="block">Instant Hire</span>
          </NavLink>

          <NavLink to="/login" className={navLinkClass}>
            <Icon name="account_circle" size={18} />
            <span className="block">Login</span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-[#22C55E]/40 hover:bg-white/10 xl:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <Icon
              name="close"
              size={23}
              className="transition group-hover:text-[#22C55E]"
            />
          ) : (
            <Icon
              name="menu"
              size={23}
              className="transition group-hover:text-[#22C55E]"
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mx-auto max-w-7xl overflow-hidden transition-all duration-300 xl:hidden ${
          isOpen ? "max-h-150 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
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