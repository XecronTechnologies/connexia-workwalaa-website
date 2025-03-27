import React, { useState, useEffect } from "react";
import { setActivePage } from "../../store/navigationSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate } from 'react-router-dom';
import WorkwalaaLogoDark from "/WorkwalaaLogoDark.png";
import WorkwalaaLogo from "/WorkwalaaLogo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavigationBar: React.FC = () => {
  const { activePage, navItems } = useSelector(
    (state: RootState) => state.navigation
  );
  const dispatch = useDispatch<AppDispatch>();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handlePageChange = (page: string, url?: string, external?: boolean) => {
    dispatch(setActivePage(page));
    if (external) {
      window.open(url, "_blank");
    } else if (url) {
      navigate(url);
      setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-yellow-400 shadow-md" : "bg-transparent"
      }`}
      data-webapp-navbar
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {isScrolled ? (
            <img src={WorkwalaaLogoDark} width="80px" alt="Workwalaa Logo Dark" />
          ) : (
            <img src={WorkwalaaLogo} width="80px" alt="Workwalaa Logo" />
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <button
                onClick={() =>
                  handlePageChange(item.page, item.url, item.external)
                }
                className={`hover:transition-colors duration-200 focus:outline-none ${
                  activePage === item.page && isScrolled
                    ? "text-gray-900 font-bold"
                    : activePage === item.page
                    ? "text-yellow-400 font-bold"
                    : isScrolled
                    ? "text-gray-900"
                    : "text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300
                             group-hover:w-full ${
                               activePage === item.page ? "w-full" : ""
                             }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
            className="md:hidden focus:outline-none absolute top-4 right-6 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className={`h-6 w-6 text-white`} />
          ) : (
            <Bars3Icon className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#121212] transition-all duration-300 z-40 pt-20 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <li key={`mobile-${item.label}`} className="relative group">
              <button
                onClick={() =>
                  handlePageChange(item.page, item.url, item.external)
                }
                className={`text-2xl font-medium focus:outline-none ${
                  activePage === item.page
                    ? "text-yellow-400"
                    : "text-gray-900"
                } text-white`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300
                             group-hover:w-full ${
                               activePage === item.page ? "w-full" : ""
                             }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;