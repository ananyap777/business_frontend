import { Route } from "react-router-dom";

import Home from "../pages/Home";

import SearchResults from "../pages/search/SearchResults";
import CategoryListing from "../pages/search/CategoryListing";
import SubCategory from "../pages/search/SubCategory";
import CityListing from "../pages/search/CityListing";
import AreaListing from "../pages/search/AreaListing";
import NearMe from "../pages/search/NearMe";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import OTPVerification from "../pages/auth/OTPVerification";

import TopRatedBusinesses from "../pages/conversion/TopRatedBusinesses";
import TrendingServices from "../pages/conversion/TrendingServices";
import CompareBusinesses from "../pages/conversion/CompareBusinesses";
import InstantHire from "../pages/conversion/InstantHire";

const PublicRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />

      <Route path="/search" element={<SearchResults />} />
      <Route path="/categories" element={<CategoryListing />} />
      <Route path="/category/:categoryName" element={<SubCategory />} />
      <Route path="/city/:cityName" element={<CityListing />} />
      <Route path="/area/:areaName" element={<AreaListing />} />
      <Route path="/near-me" element={<NearMe />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-otp" element={<OTPVerification />} />

      <Route path="/top-rated-businesses" element={<TopRatedBusinesses />} />
      <Route path="/trending-services" element={<TrendingServices />} />
      <Route path="/compare-businesses" element={<CompareBusinesses />} />
      <Route path="/instant-hire" element={<InstantHire />} />
    </>
  );
};

export default PublicRoutes;