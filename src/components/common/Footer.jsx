const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <h2 style={styles.logo}>BusinessHub</h2>
        <p style={styles.text}>
          Discover trusted businesses and services near you.
        </p>
      </div>

      <div style={styles.copy}>
        © 2026 BusinessHub. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "60px",
    padding: "40px",
    backgroundColor: "#111827",
    color: "#ffffff",
  },
  logo: {
    marginBottom: "10px",
  },
  text: {
    color: "#d1d5db",
  },
  copy: {
    marginTop: "30px",
    color: "#9ca3af",
    fontSize: "14px",
  },
};

export default Footer;