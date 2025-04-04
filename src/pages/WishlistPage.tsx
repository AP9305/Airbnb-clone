
import React from 'react';
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import { useWishlist } from '@/contexts/WishlistContext';
import { properties } from "@/data/properties";
import { Heart } from 'lucide-react';
import WishlistButton from '@/components/WishlistButton';

const WishlistPage = () => {
  const { wishlist } = useWishlist();
  
  // Get wishlist properties from the properties data
  // Convert property.id to string to match wishlist item type
  const wishlistProperties = properties.filter(property => 
    wishlist.includes(property.id.toString())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="h-6 w-6 text-airbnb-red" />
          <h1 className="text-2xl md:text-3xl font-bold text-airbnb-dark">Wishlists</h1>
        </div>
        
        {wishlistProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProperties.map((property) => (
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
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Heart className="h-8 w-8 text-airbnb-light" />
            </div>
            <h2 className="text-xl font-medium text-airbnb-dark mb-2">No saved properties yet</h2>
            <p className="text-airbnb-light max-w-md mx-auto">
              Click the heart icon on any property to save it to your wishlist for easy access later.
            </p>
          </div>
        )}
      </main>
      
      <footer className="bg-airbnb-super-light py-6 border-t border-gray-200 mt-8">
        <div className="container mx-auto px-4 text-center text-airbnb-light">
          © 2025 Airbnb Clone, Inc.
        </div>
      </footer>
    </div>
  );
};

export default WishlistPage;
