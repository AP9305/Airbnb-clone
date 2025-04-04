import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import FilterBar from "@/components/FilterBar";
import { properties } from "@/data/properties";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const InspirationCard = ({ image, title, gradient }: { image: string; title: string; gradient: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group cursor-pointer"
  >
    <div className="overflow-hidden rounded-lg aspect-square mb-2 relative">
      <div className={`absolute inset-0 ${gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-300`} />
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <h3 className="absolute bottom-3 left-3 font-medium text-white text-lg">{title}</h3>
    </div>
  </motion.div>
);

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Get featured properties (in a real app, this might be properties that are promoted)
  const featuredProperties = properties.slice(0, 3);

  const inspirationCards = [
    {
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
      title: "Mountain views",
      gradient: "bg-gradient-to-t from-black/60 to-transparent"
    },
    {
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg",
      title: "Beach destinations",
      gradient: "bg-gradient-to-t from-black/60 to-transparent"
    },
    {
      image: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg",
      title: "City life",
      gradient: "bg-gradient-to-t from-black/60 to-transparent"
    },
    {
      image: "https://images.pexels.com/photos/5472258/pexels-photo-5472258.jpeg",
      title: "Cozy cabins",
      gradient: "bg-gradient-to-t from-black/60 to-transparent"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80")' }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find your next stay</h1>
          <p className="text-xl md:text-2xl mb-8">Search deals on hotels, homes, and much more...</p>
          
          <div className="w-full max-w-md bg-white rounded-full overflow-hidden shadow-lg">
            <div className="flex items-center p-1">
              <Input
                type="text"
                placeholder="Where are you going?"
                className="border-0 focus:ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Link to="/listings">
                <Button className="rounded-full bg-airbnb-red hover:bg-airbnb-red/90 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Properties Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-airbnb-dark">Featured places to stay</h2>
          <Link to="/listings">
            <Button variant="link" className="text-airbnb-red">
              Show all
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              location={`${property.city}, ${property.country}`}
              price={property.price}
              rating={property.rating}
              images={property.images}
              superhost={property.host.isSuperhost}
            />
          ))}
        </div>
      </div>
      
      {/* Inspiration Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Inspiration for your next trip
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {inspirationCards.map((card, index) => (
            <InspirationCard
              key={index}
              image={card.image}
              title={card.title}
              gradient={card.gradient}
            />
          ))}
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="container mx-auto py-16 px-4 border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-airbnb-dark mb-8">Inspiration for your next trip</h2>
        <FilterBar onChange={setActiveFilters} />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg aspect-square mb-2">
              <img
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Mountain views"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-airbnb-dark">Mountain views</h3>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg aspect-square mb-2">
              <img
                src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Beach destinations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-airbnb-dark">Beach destinations</h3>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg aspect-square mb-2">
              <img
                src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
                alt="Cabins"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-airbnb-dark">Cabins</h3>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg aspect-square mb-2">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Luxury stays"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-airbnb-dark">Luxury stays</h3>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-airbnb-super-light py-12 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-airbnb-dark mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-airbnb-light hover:underline">Help Center</a></li>
                <li><a href="#" className="text-airbnb-light hover:underline">Safety information</a></li>
                <li><a href="#" className="text-airbnb-light hover:underline">Cancellation options</a></li>
                <li><a href="#" className="text-airbnb-light hover:underline">Report neighborhood concern</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-airbnb-dark mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-airbnb-light hover:underline">Disaster relief housing</a></li>
                <li><a href="#" className="text-airbnb-light hover:underline">Support refugees</a></li>
                <li><a href="#" className="text-airbnb-light hover:underline">Combating discrimination</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-airbnb-dark mb-4">Hosting</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-airbnb-light hover:underline">Try hosting</a></li>
                <li><a href="#" className="text-airbnb-light hover:underline">AirCover for Hosts</a></li>
                <li><a href="#" className="text-airbnb-light hover:underline">Explore hosting resources</a></li>
                <li><a href="#" className="text-airbnb-light hover:underline">How to host responsibly</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-airbnb-dark mb-4">Airbnb</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-airbnb-light hover:underline">Newsroom</a></li>
                <li><a href="#" className="text-airbnb-light hover:underline">Learn about new features</a></li>
                <li><a href="#" className="text-airbnb-light hover:underline">Careers</a></li>
                <li><a href="#" className="text-airbnb-light hover:underline">Investors</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-airbnb-light mb-4 md:mb-0">
              © 2025 Airbnb Clone, Inc.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-airbnb-light hover:underline">Privacy</a>
              <a href="#" className="text-airbnb-light hover:underline">Terms</a>
              <a href="#" className="text-airbnb-light hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
