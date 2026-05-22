import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter
} from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Footer = () => {

  const navigate = useNavigate()
  return (
    <footer className="bg-gray-900 text-gray-300  border-t border-gray-800">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src="src\assets\Logo.jpeg" alt="logo"
              className=" w-3\20 h-20 rounded-2xl" />
          </div>

          <p className="text-sm leading-7 text-gray-400 max-w-sm">
            Simplifying business operations through modern automation,
            AI-powered workflows, CRM, ERP, billing, and smart management
            solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <button className="hover:text-green-400 transition-all text-left"
              onClick={() => { navigate('/about') }}>
              About Us
            </button>

            <button className="hover:text-green-400 transition-all text-left"
              onClick={() => { navigate('/contact') }}>
              Contact Us
            </button>

            <button className="hover:text-green-400 transition-all text-left">
              Services
            </button>

            <button className="hover:text-green-400 transition-all text-left">
              Pricing
            </button>

            <button className="hover:text-green-400 transition-all text-left"
              onClick={() => { navigate('/faq') }}>
              Faq
            </button>

            <button className="hover:text-green-400 transition-all text-left"
              onClick={() => { navigate('/insight') }}>
              Insights
            </button>

            <button className="hover:text-green-400 transition-all text-left"
              onClick={() => { navigate('/help') }}>
              Help Center
            </button>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Categories
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <button className="hover:text-green-400 transition-all text-left">
              CRM Solutions
            </button>

            <button className="hover:text-green-400 transition-all text-left">
              ERP Software
            </button>

            <button className="hover:text-green-400 transition-all text-left">
              Inventory Management
            </button>

            <button className="hover:text-green-400 transition-all text-left">
              AI Automation
            </button>

            <button className="hover:text-green-400 transition-all text-left">
              Billing & GST
            </button>
          </div>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm text-gray-400">
            <p className="wrap-break-word">
              support@businessflow.com
            </p>

            <p>+91 98765 43210</p>

            <p>Odisha, India</p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">

            <button className="w-11 h-11 rounded-2xl bg-gray-800 hover:bg-green-500 transition-all flex items-center justify-center text-lg text-white">
             <Link to='https://www.facebook.com/' target="_blank"> <FaFacebookF /> </Link>
            </button>

            <button className="w-11 h-11 rounded-2xl bg-gray-800 hover:bg-green-500 transition-all flex items-center justify-center text-lg text-white">
             <Link to='https://www.instagram.com/' target="_blank"> <FaInstagram /> </Link>
            </button>
            <button className="w-11 h-11 rounded-2xl bg-gray-800 hover:bg-green-500 transition-all flex items-center justify-center text-lg text-white">
             <Link to='https://www.linkedin.com/' target="_blank"> <FaLinkedinIn /></Link>
            </button>

            <button className="w-11 h-11 rounded-2xl bg-gray-800 hover:bg-green-500 transition-all flex items-center justify-center text-lg text-white">
             <Link to='https://x.com/' target="_blank"> <FaXTwitter /> </Link>
            </button>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 text-center md:text-left">

          <p>
            © 2026 BusinessFlow. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button className="hover:text-green-400 transition-all">
              Privacy Policy
            </button>

            <button className="hover:text-green-400 transition-all">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer