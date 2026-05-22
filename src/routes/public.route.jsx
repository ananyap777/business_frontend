import { Route ,Routes} from "react-router-dom";



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



import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Faq from "../pages/Faq"
import Insights from "../pages/Insights"

import HelpCenterPage from "../pages/Help"
import CategoryPage from "../pages/categories/CategoryPage"
import CompareBusinessesPage from "../pages/business/CompareBusiness"
import OffersPage from "../pages/offers/OffersPage"
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";


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


        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/insight" element={<Insights/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/help" element={<HelpCenterPage/>}/>
        <Route path="/compare-businesses" element={<CompareBusinessesPage/>}/>
        <Route path="/trending-services" element={<OffersPage/>}/>
      
    </>
  );
};

export default PublicRoutes;