import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import Icon from "./Icon";

const navItems = [
  { to: "/search", icon: "manage_search", label: "Search" },
  { to: "/categories", icon: "category_search", label: "Categories" },
  { to: "/compare-businesses", icon: "compare_arrows", label: "Compare" },
  { to: "/top-rated-businesses", icon: "workspace_premium", label: "Top Rated" },
  { to: "/trending-services", icon: "local_fire_department", label: "Trending" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, isAuthenticated, user, logout } = useApp();
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-1.5 rounded-lg px-3 py-2 transition ${
      isActive
        ? "bg-green-500/12 text-[#16A34A]"
        : "text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#16A34A] dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-[#4ADE80]"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-green-500/12 text-[#16A34A]"
        : "text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#16A34A] dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-[#4ADE80]"
    }`;

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  const authAction = isAuthenticated ? (
    <div className="hidden items-center gap-2 lg:flex">
      <span className="max-w-32 truncate rounded-lg bg-[#F3F4F6] px-3 py-2 text-sm font-semibold text-[#374151] dark:bg-white/10 dark:text-slate-200">
        {user?.name || user?.mobile || "Account"}
      </span>
      <button
        onClick={handleLogout}
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-[#4B5563] transition hover:bg-red-50 hover:text-red-600 dark:text-slate-300 dark:hover:bg-red-500/10 dark:hover:text-red-300"
      >
        <Icon name="logout" size={18} />
        Logout
      </button>
    </div>
  ) : (
    <NavLink to="/login" className={navLinkClass}>
      <Icon name="account_circle" size={18} />
      Login
    </NavLink>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E5E7EB]/80 bg-white/92 px-5 shadow-sm backdrop-blur-xl transition-colors md:px-8 dark:border-white/10 dark:bg-[#0F172A]/92">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-2xl font-bold text-[#111827] dark:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#22C55E]/12 text-[#16A34A] dark:text-[#4ADE80]">
            <Icon name="storefront" size={22} />
          </span>

          <span>
            Vyora<span className="text-[#22C55E]">.</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              <Icon name={item.icon} size={18} />
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/instant-hire"
            className={({ isActive }) =>
              `flex items-center gap-1.5 rounded-lg px-4 py-2 font-semibold text-white transition ${
                isActive ? "bg-[#16A34A]" : "bg-[#22C55E] hover:bg-green-600"
              }`
            }
          >
            <Icon name="bolt" size={18} />
            Instant Hire
          </NavLink>

          <button
            onClick={toggleTheme}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] text-[#374151] transition hover:border-[#22C55E] hover:text-[#16A34A] dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:text-[#4ADE80]"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Icon name={theme === "dark" ? "light_mode" : "dark_mode"} size={20} />
          </button>

          {authAction}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] text-[#374151] transition dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            <Icon name={theme === "dark" ? "light_mode" : "dark_mode"} size={20} />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] text-[#111827] transition hover:border-[#22C55E] dark:border-white/10 dark:bg-white/10 dark:text-white"
            aria-label="Toggle menu"
          >
            <Icon name={isOpen ? "close" : "menu"} size={23} />
          </button>
        </div>
      </div>

      <div
        className={`mx-auto max-w-7xl overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-160 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
        }`}
      >
        <div className="mt-2 rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-lg dark:border-white/10 dark:bg-[#111827]">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={mobileNavLinkClass}
            >
              <Icon name={item.icon} size={19} />
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/instant-hire"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            <Icon name="bolt" size={19} />
            Instant Hire
          </NavLink>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="mt-2 flex w-full items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-500/10"
            >
              <Icon name="logout" size={19} />
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              onClick={closeMenu}
              className={mobileNavLinkClass}
            >
              <Icon name="account_circle" size={19} />
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
