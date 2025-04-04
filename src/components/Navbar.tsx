import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Heart } from "lucide-react";
import { Link } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
              <svg
                className="h-8 w-auto text-[#FF385C]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0002 1.99805C14.3462 1.99805 16.5002 2.89805 18.1922 4.58805C19.8842 6.27805 20.7842 8.43205 20.7842 10.7781C20.7842 13.9061 19.5762 16.9661 17.1842 19.9661C15.5762 22.0141 13.8442 23.4581 13.7682 23.5141C13.2202 23.9301 12.6162 24.1381 12.0002 24.1381C11.3842 24.1381 10.7802 23.9301 10.2322 23.5141C10.1562 23.4581 8.42423 22.0141 6.81623 19.9661C4.42423 16.9661 3.21623 13.9061 3.21623 10.7781C3.21623 8.43205 4.11623 6.27805 5.80823 4.58805C7.50023 2.89805 9.65423 1.99805 12.0002 1.99805ZM12.0002 17.3541C15.5082 17.3541 18.3602 14.5021 18.3602 10.9941C18.3602 7.48605 15.5082 4.63405 12.0002 4.63405C8.49223 4.63405 5.64023 7.48605 5.64023 10.9941C5.64023 14.5021 8.49223 17.3541 12.0002 17.3541Z" />
              </svg>
              <span className="ml-2 text-xl font-semibold text-gray-900">TravelPad</span>
            </Link>
          </motion.div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Search destinations..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Become a Host
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
