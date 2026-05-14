import { Route } from "react-router-dom";

// Search & Discovery Pages
import SearchResults from "../pages/search/SearchResults";
import CategoryListing from "../pages/search/CategoryListing";
import SubCategory from "../pages/search/SubCategory";
import CityListing from "../pages/search/CityListing";
import AreaListing from "../pages/search/AreaListing";
import NearMe from "../pages/search/NearMe";

// Authentication Pages
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import OTPVerification from "../pages/auth/OTPVerification";

// High Conversion Pages
import CompareBusinesses from "../pages/conversion/CompareBusinesses";
import TopRatedBusinesses from "../pages/conversion/TopRatedBusinesses";
import InstantHire from "../pages/conversion/InstantHire";
import TrendingServices from "../pages/conversion/TrendingServices";

const PublicRoutes = (
  <>
    {/* Search & Discovery Routes */}
    <Route path="/search" element={<SearchResults />} />
    <Route path="/categories" element={<CategoryListing />} />
    <Route path="/category/:categoryName" element={<SubCategory />} />
    <Route path="/city/:cityName" element={<CityListing />} />
    <Route path="/area/:areaName" element={<AreaListing />} />
    <Route path="/near-me" element={<NearMe />} />

    {/* Authentication Routes */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/verify-otp" element={<OTPVerification />} />

    {/* High Conversion Routes */}
    <Route path="/compare-businesses" element={<CompareBusinesses />} />
    <Route path="/top-rated-businesses" element={<TopRatedBusinesses />} />
    <Route path="/instant-hire" element={<InstantHire />} />
    <Route path="/trending-services" element={<TrendingServices />} />
  </>
);

export default PublicRoutes;