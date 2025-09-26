import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'Software Development', path: '/services/software' },
    { name: 'Training Programs', path: '/services/training' },
    { name: 'Internships', path: '/career' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/WhatsApp Image 2025-09-20 at 13.21.09_7cc2ab7b.jpg" 
              alt="Freshub Solutions Logo" 
              className="h-12 w-12 object-contain"
            />
            <div className="text-xl font-bold text-gray-900">
              <span className="text-blue-900">Fresh</span>
              <span className="text-teal-600">hub</span>
              <div className="text-sm text-gray-600 font-normal">Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/') ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/about') ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                    style={{ 
                      transform: 'translateZ(0)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    {services.map((service, index) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-200 transform hover:translateX-2"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/career"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/career') ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Career
            </Link>

            <Link
              to="/contact"
              className={`px-6 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-900 to-teal-600 hover:from-blue-800 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isActive('/contact') ? 'ring-2 ring-blue-300' : ''
              }`}
              style={{ transform: 'translateZ(0)' }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 transition-all duration-300"
              style={{ 
                transform: 'translateZ(0)',
                transformStyle: 'preserve-3d'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotateY: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2 shadow-inner">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-white transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-white transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <div className="px-3 py-2">
                  <div className="text-base font-medium text-gray-700 mb-2">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-1 text-sm text-gray-600 hover:text-blue-900 transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/career"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-white transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Career
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-blue-900 to-teal-600 text-center mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;