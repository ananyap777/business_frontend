import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_DESCRIPTION =
  "Discover trusted local businesses with Vyora. Search services, compare vendors, and connect with providers by category, city, or area.";

const DEFAULT_METADATA = {
  title: "Vyora | Discover Trusted Businesses",
  description: DEFAULT_DESCRIPTION,
  robots: "index, follow",
};

const STATIC_METADATA = {
  "/": DEFAULT_METADATA,
  "/search": {
    title: "Search Trusted Businesses | Vyora",
    description:
      "Search services, compare trusted businesses, and find vendors by category or city on Vyora.",
    robots: "index, follow",
  },
  "/categories": {
    title: "Business Categories | Vyora",
    description:
      "Browse Vyora business categories to discover local services, vendors, and providers for everyday needs.",
    robots: "index, follow",
  },
  "/near-me": {
    title: "Businesses Near Me | Vyora",
    description:
      "Discover nearby businesses and service providers through Vyora local business search.",
    robots: "index, follow",
  },
  "/top-rated-businesses": {
    title: "Top Rated Businesses | Vyora",
    description:
      "Compare top rated businesses on Vyora using ratings, trust signals, and service details.",
    robots: "index, follow",
  },
  "/trending-services": {
    title: "Trending Services | Vyora",
    description:
      "Explore trending services and discover trusted businesses ready to help on Vyora.",
    robots: "index, follow",
  },
  "/compare-businesses": {
    title: "Compare Businesses | Vyora",
    description:
      "Compare businesses, service details, ratings, and trust signals before choosing a provider on Vyora.",
    robots: "index, follow",
  },
  "/instant-hire": {
    title: "Instant Hire | Vyora",
    description:
      "Share a service requirement and connect with suitable businesses faster through Vyora Instant Hire.",
    robots: "index, follow",
  },
  "/login": {
    title: "Login | Vyora",
    description: "Login to Vyora to continue discovering trusted businesses.",
    robots: "noindex, nofollow",
  },
  "/signup": {
    title: "Signup | Vyora",
    description: "Create a Vyora account to connect with trusted businesses.",
    robots: "noindex, nofollow",
  },
  "/verify-otp": {
    title: "Verify OTP | Vyora",
    description: "Verify your Vyora login code.",
    robots: "noindex, nofollow",
  },
};

const formatSlug = (slug) => {
  return decodeURIComponent(slug)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const getMetadata = (pathname) => {
  if (STATIC_METADATA[pathname]) {
    return STATIC_METADATA[pathname];
  }

  if (pathname.startsWith("/category/")) {
    const category = formatSlug(pathname.replace("/category/", ""));

    return {
      title: `${category} Businesses | Vyora`,
      description: `Explore trusted ${category} businesses, popular services, and vendor options on Vyora.`,
      robots: "index, follow",
    };
  }

  if (pathname.startsWith("/city/")) {
    const city = formatSlug(pathname.replace("/city/", ""));

    return {
      title: `Businesses in ${city} | Vyora`,
      description: `Discover trusted businesses, vendors, and local services available in ${city} on Vyora.`,
      robots: "index, follow",
    };
  }

  if (pathname.startsWith("/area/")) {
    const area = formatSlug(pathname.replace("/area/", ""));

    return {
      title: `Businesses in ${area} | Vyora`,
      description: `Find trusted local businesses and service providers around ${area} with Vyora.`,
      robots: "index, follow",
    };
  }

  return {
    ...DEFAULT_METADATA,
    robots: "noindex, nofollow",
  };
};

const setMetaContent = (selector, attributes, content) => {
  let meta = document.head.querySelector(selector);

  if (!meta) {
    meta = document.createElement("meta");

    Object.entries(attributes).forEach(([name, value]) => {
      meta.setAttribute(name, value);
    });

    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

const setCanonicalUrl = (pathname) => {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", `${window.location.origin}${pathname}`);
};

const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getMetadata(pathname);

    document.title = metadata.title;

    setMetaContent('meta[name="description"]', { name: "description" }, metadata.description);
    setMetaContent('meta[name="robots"]', { name: "robots" }, metadata.robots);
    setMetaContent('meta[property="og:title"]', { property: "og:title" }, metadata.title);
    setMetaContent(
      'meta[property="og:description"]',
      { property: "og:description" },
      metadata.description
    );
    setMetaContent('meta[property="og:url"]', { property: "og:url" }, window.location.href);
    setMetaContent('meta[name="twitter:title"]', { name: "twitter:title" }, metadata.title);
    setMetaContent(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      metadata.description
    );
    setCanonicalUrl(pathname);
  }, [pathname]);

  return null;
};

export default RouteSeo;
