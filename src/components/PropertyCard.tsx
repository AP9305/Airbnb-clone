
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/listings/${id}`}>
      <Card className="overflow-hidden border-none hover:shadow-md transition-shadow duration-300 h-full">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden relative">
            <img
              src={images[currentImageIndex]}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
            
            {images.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.preventDefault(); prevImage(); }} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow-md opacity-70 hover:opacity-100"
                >
                  <span className="sr-only">Previous</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={(e) => { e.preventDefault(); nextImage(); }} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow-md opacity-70 hover:opacity-100"
                >
                  <span className="sr-only">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}
            
            <button 
              onClick={toggleFavorite}
              className="absolute top-2 right-2 p-1.5 rounded-full"
            >
              <Heart 
                className={`h-6 w-6 ${isFavorite ? 'fill-airbnb-red text-airbnb-red' : 'text-white stroke-white fill-black/20'}`} 
              />
            </button>
            
            {superhost && (
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-xs font-medium text-airbnb-dark">
                Superhost
              </div>
            )}
          </div>
        </div>
        
        <CardContent className="pt-3 px-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-airbnb-dark">{title}</h3>
              <p className="text-airbnb-light text-sm">{location}</p>
              <p className="text-airbnb-dark mt-2">
                <span className="font-semibold">${price}</span>
                <span className="text-airbnb-light"> night</span>
              </p>
            </div>
            <div className="flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-airbnb-dark">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <span className="text-airbnb-dark text-sm ml-1">{rating}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
