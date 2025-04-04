
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Heart } from "lucide-react";
import { Link } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-airbnb-red font-bold text-xl md:text-2xl">airbnb</div>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search destinations"
              className="pr-10 border-2 focus:border-airbnb-red focus:ring-airbnb-red"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Search className="h-5 w-5 text-airbnb-red" />
            </div>
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center">
          <Link to="/listings">
            <Button variant="link" className="text-airbnb-dark">
              Explore
            </Button>
          </Link>
          
          <Link to="/wishlist">
            <Button variant="link" className="text-airbnb-dark flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Wishlist</span>
            </Button>
          </Link>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="ml-2 border border-gray-300 rounded-full p-2 flex items-center gap-2">
                <User className="h-5 w-5 text-airbnb-dark" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-50">
              <div className="grid gap-2">
                <Button variant="ghost" className="text-left">Sign up</Button>
                <Button variant="ghost" className="text-left">Log in</Button>
                <hr className="my-1" />
                <Button variant="ghost" className="text-left">Host your home</Button>
                <Button variant="ghost" className="text-left">Help</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
