import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Refs for dropdown
  const dropdownTimeoutRef = useRef(null);
  const servicesRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse enter with delay clearing
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesDropdownOpen(true);
  };

  // Handle mouse leave with delay (gives time to move to dropdown)
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 200); // 200ms delay gives user time to move mouse to dropdown
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Service dropdown items
  const serviceItems = [
    {
      path: '/services/security-crowd-control',
      label: 'Security & Crowd Control',
      description: 'Professional security solutions'
    },
    {
      path: '/services/traffic',
      label: 'Traffic & Event Management',
      description: 'Efficient traffic and event coordination'
    },
    {
      path: '/services/pest-control',
      label: 'Pest Control',
      description: 'Integrated pest management'
    },
    {
      path: '/services/cleaning',
      label: 'Cleaning Services',
      description: 'Comprehensive cleaning solutions'
    },
    {
      path: '/services/landscaping',
      label: 'Landscape Management',
      description: 'Professional landscape maintenance'
    }
  ];

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    {
      path: '/services',
      label: 'Services',
      hasDropdown: true,
      dropdownItems: serviceItems
    },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 pt-0 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
        : 'bg-transparent py-6'
        }`}>
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/img/logoGreen.png"
                alt="FIH Logo"
                className={`h-20 w-auto transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
              />
              <img
                src="/img/logo.png"
                alt="FIH Logo"
                className={`h-20 w-auto transition-all duration-300 ${isScrolled ? 'opacity-0 absolute' : 'opacity-100'
                  }`}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <div key={item.path} className="relative">
                  {item.hasDropdown ? (
                    <div
                      ref={servicesRef}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`font-medium transition-all duration-300 flex items-center gap-1 hover:text-green-500 ${isScrolled
                            ? 'text-gray-700 hover:text-green-200'
                            : 'text-white hover:text-green-200'
                          } ${location.pathname.startsWith('/services')
                            ? isScrolled ? 'text-green-600' : 'text-green-300'
                            : ''
                          }`}
                      >
                        Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Desktop Dropdown - with bridge to prevent gap */}
                      {isServicesDropdownOpen && (
                        <div
                          ref={dropdownRef}
                          className="absolute left-0 mt-0 pt-2 w-80 z-50"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="py-2">
                              {serviceItems.map((service) => (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  className="block px-5 py-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-transparent transition-all duration-200 group"
                                  onClick={() => setIsServicesDropdownOpen(false)}
                                >
                                  <div className="flex flex-col">
                                    <span className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                                      {service.label}
                                    </span>
                                    <span className="text-xs text-gray-400 group-hover:text-green-400 mt-0.5">
                                      {service.description}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            {/* View All Services Link */}
                            <div className="border-t border-gray-100 bg-gray-50">
                              <Link
                                to="/services"
                                className="block px-5 py-3 text-center text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 transition-colors"
                                onClick={() => setIsServicesDropdownOpen(false)}
                              >
                                View All Services →
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-medium transition-all duration-300 hover:text-green-500 ${isScrolled
                          ? 'text-gray-700 hover:text-green-600'
                          : 'text-white hover:text-green-200'
                        } ${location.pathname === item.path
                          ? isScrolled ? 'text-green-600' : 'text-green-300'
                          : ''
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Emergency Contact - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+6584002919"
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${isScrolled
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-white text-green-600 hover:bg-gray-100'
                  }`}
              >
                <Phone className="w-4 h-4" />
                Call: +65 8400-2919
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'
                }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeInDown">
              <div className="py-2 max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.path} className="border-b border-gray-50 last:border-0">
                    {item.hasDropdown ? (
                      <div>
                        {/* Mobile Services Button */}
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="w-full flex items-center justify-between px-6 py-4 text-base font-medium text-gray-700 hover:text-green-100 hover:bg-gray-50 transition-all duration-200"
                        >
                          <span>Services</span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''
                            }`} />
                        </button>

                        {/* Mobile Dropdown Items */}
                        {isMobileServicesOpen && (
                          <div className="bg-gray-50/50 pl-4 py-2">
                            {serviceItems.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                                className="flex flex-col px-5 py-3 hover:bg-green-50 rounded-lg transition-all duration-200 group"
                              >
                                <span className="font-medium text-gray-800 group-hover:text-green-600">
                                  {service.label}
                                </span>
                                <span className="text-xs text-gray-400 group-hover:text-green-400 mt-0.5">
                                  {service.description}
                                </span>
                              </Link>
                            ))}
                            {/* View All Services Link for Mobile */}
                            <Link
                              to="/services"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className="block px-5 py-3 mt-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors text-center"
                            >
                              View All Services →
                            </Link>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center px-6 py-4 text-base font-medium transition-all duration-200 ${location.pathname === item.path
                            ? 'text-green-600 bg-green-50 border-l-4 border-green-600'
                            : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Footer with Contact */}
              <div className="border-t border-gray-100 px-6 py-4 bg-gray-50/50">
                <a
                  href="tel:+6589520327"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call: +65 8952-0327
                </a>
                <div className="text-xs text-center text-gray-400 mt-3">
                  Select an option to continue
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;