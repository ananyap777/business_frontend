import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext(null);

const readStoredUser = () => {
  try {
    const storedUser = localStorage.getItem("vyora_user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    return null;
  }
};

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("vyora_theme") || "light"
  );
  const [user, setUser] = useState(readStoredUser);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("vyora_theme", theme);
  }, [theme]);

  useEffect(() => {
    const syncAuth = () => setUser(readStoredUser());
    window.addEventListener("storage", syncAuth);
    window.addEventListener("vyora-auth-change", syncAuth);

    return () => {
      window.removeEventListener("storage", syncAuth);
      window.removeEventListener("vyora-auth-change", syncAuth);
    };
  }, []);

  const value = useMemo(
    () => ({
      theme,
      user,
      isAuthenticated: Boolean(user),
      toggleTheme: () =>
        setTheme((currentTheme) =>
          currentTheme === "dark" ? "light" : "dark"
        ),
      logout: () => {
        localStorage.removeItem("vyora_token");
        localStorage.removeItem("vyora_user");
        setUser(null);
        window.dispatchEvent(new Event("vyora-auth-change"));
      },
    }),
    [theme, user]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
