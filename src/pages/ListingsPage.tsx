
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import FilterBar from "@/components/FilterBar";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ListingsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Filter properties based on search term and active filters
  useEffect(() => {
    let filtered = properties;
    
    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(term) || 
        property.location.toLowerCase().includes(term) ||
        property.city.toLowerCase().includes(term) ||
        property.country.toLowerCase().includes(term)
      );
    }
    
    // Apply price range filter
    filtered = filtered.filter(property => 
      property.price >= priceRange.min && property.price <= priceRange.max
    );
    
    setFilteredProperties(filtered);
  }, [searchTerm, activeFilters, priceRange]);

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = parseInt(value) || 0;
    setPriceRange(prev => ({
      ...prev,
      [type]: numValue
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <h1 className="text-2xl md:text-3xl font-bold text-airbnb-dark">Places to stay</h1>
          
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <Input
              type="text"
              placeholder="Search destinations"
              className="w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="bg-airbnb-red hover:bg-airbnb-red/90 text-white">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <FilterBar onChange={setActiveFilters} />
        
        {/* Additional Filters */}
        <div className="my-6 p-4 bg-white border border-gray-200 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Price range</h3>
          <div className="flex items-center space-x-4">
            <div className="w-full">
              <label htmlFor="minPrice" className="block text-sm text-airbnb-light mb-1">Minimum</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-airbnb-light">$</span>
                <Input
                  id="minPrice"
                  type="number"
                  className="pl-8"
                  value={priceRange.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                  min={0}
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="maxPrice" className="block text-sm text-airbnb-light mb-1">Maximum</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-airbnb-light">$</span>
                <Input
                  id="maxPrice"
                  type="number"
                  className="pl-8"
                  value={priceRange.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                  min={0}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="my-8">
          <p className="text-airbnb-light mb-4">{filteredProperties.length} stays</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
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
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-airbnb-dark mb-2">No results found</h3>
              <p className="text-airbnb-light">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-airbnb-super-light py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-airbnb-light">
          © 2025 Airbnb Clone, Inc.
        </div>
      </footer>
    </div>
  );
};

export default ListingsPage;
