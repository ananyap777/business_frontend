import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>BusinessHub</Link>
      </div>

      <div style={styles.links}>
        <Link to="/search" style={styles.link}>Search</Link>
        <Link to="/categories" style={styles.link}>Categories</Link>
        <Link to="/top-rated-businesses" style={styles.link}>Top Rated</Link>
        <Link to="/trending-services" style={styles.link}>Trending</Link>
        <Link to="/instant-hire" style={styles.cta}>Instant Hire</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    height: "70px",
    padding: "0 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: "24px",
    fontWeight: "700",
  },
  logoLink: {
    textDecoration: "none",
    color: "#111827",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  },
  link: {
    textDecoration: "none",
    color: "#374151",
    fontSize: "15px",
    fontWeight: "500",
  },
  cta: {
    textDecoration: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "10px 16px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
  },
};

export default Navbar;