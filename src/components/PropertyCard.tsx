import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import WishlistButton from './WishlistButton';

export interface PropertyProps {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  superhost?: boolean;
}

const PropertyCard = ({ id, title, location, price, rating, images, superhost }: PropertyProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative rounded-xl bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/listings/${id}`} className="block h-full">
        <Card className="overflow-hidden border-none h-full">
          <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
            {imageError ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <svg 
                  className="w-12 h-12 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            ) : (
              <img
                src={images[currentImageIndex]}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                onError={handleImageError}
                loading="lazy"
              />
            )}
            
            {!imageError && images.length > 1 && isHovered && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="sr-only">Previous</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="sr-only">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}
            
            <div className="absolute top-2 right-2 z-10">
              <WishlistButton propertyId={id} />
            </div>
            
            {superhost && (
              <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-900">
                Superhost
              </div>
            )}
          </div>
          
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900 line-clamp-1">{title}</h3>
                <p className="text-gray-600 text-sm">{location}</p>
                <p className="text-gray-900 mt-2">
                  <span className="font-semibold">${price}</span>
                  <span className="text-gray-600"> night</span>
                </p>
              </div>
              <div className="flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-900">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-sm font-medium">{rating}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
