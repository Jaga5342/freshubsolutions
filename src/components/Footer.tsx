import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/WhatsApp Image 2025-09-20 at 13.21.09_7cc2ab7b.jpg" 
                alt="Freshub Solutions Logo" 
                className="h-12 w-12 object-contain"
              />
              <div className="text-xl font-bold">
                <span className="text-white">Fres</span>
                <span className="text-teal-400">hub</span>
                <div className="text-sm text-gray-300 font-normal">Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading IT software development and training company empowering businesses and students with cutting-edge technology solutions since 2025.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Services</a></li>
              <li><a href="/career" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Career</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-gray-300 text-sm">freshubtechsolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-gray-300 text-sm">+91 9791641289</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span className="text-gray-300 text-sm">Salem, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Freshub Solutions. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;