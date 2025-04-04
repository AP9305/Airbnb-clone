
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Heart, Star, Share } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === parseInt(id || '0'));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState(1);
  const { toast } = useToast();

  if (!property) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <p>The property you're looking for doesn't exist or has been removed.</p>
          <Button className="mt-4" onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      toast({
        title: "Please select dates",
        description: "Check-in and check-out dates are required to make a booking.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking successful!",
      description: `Your stay at ${property.title} has been booked.`,
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite ? "Property removed from your saved list" : "Property added to your saved list",
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const calculateTotalPrice = () => {
    if (!checkIn || !checkOut) return 0;
    
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return property.price * diffDays;
  };

  const totalPrice = calculateTotalPrice();
  const serviceFee = totalPrice * 0.12;
  const total = totalPrice + serviceFee;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-airbnb-dark mb-2">{property.title}</h1>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-airbnb-dark mr-1" />
            <span className="font-medium mr-1">{property.rating}</span>
            <span className="text-airbnb-light mr-2">({property.reviews} reviews)</span>
            <span className="text-airbnb-light">· {property.location}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="flex items-center">
              <Share className="h-4 w-4 mr-2" />
              <span>Share</span>
            </Button>
            <Button variant="ghost" className="flex items-center" onClick={toggleFavorite}>
              <Heart className={`h-4 w-4 mr-2 ${isFavorite ? 'fill-airbnb-red text-airbnb-red' : ''}`} />
              <span>Save</span>
            </Button>
          </div>
        </div>
        
        {/* Property Images */}
        <div className="relative mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-xl overflow-hidden">
            <div className="aspect-[4/3] md:aspect-square relative">
              <img 
                src={property.images[0]} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:grid grid-cols-2 gap-2">
              {property.images.slice(1, 5).map((image, index) => (
                <div key={index} className="aspect-square relative">
                  <img 
                    src={image} 
                    alt={`${property.title} ${index + 2}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="block md:hidden relative aspect-[4/3]">
              <img 
                src={property.images[currentImageIndex]} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
              
              {property.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage} 
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow-md"
                  >
                    <span className="sr-only">Previous</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextImage} 
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow-md"
                  >
                    <span className="sr-only">Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Property Information */}
            <div className="border-b border-gray-200 pb-8 mb-8">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {property.type} hosted by {property.host.name}
                  </h2>
                  <p className="text-airbnb-light">
                    {property.maxGuests} guests · {property.bedrooms} bedrooms · {property.beds} beds · {property.bathrooms} baths
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src={property.host.image} 
                      alt={property.host.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {property.host.isSuperhost && (
                    <span className="text-xs bg-airbnb-red text-white px-2 py-1 rounded-full mt-2 inline-block">
                      Superhost
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="border-b border-gray-200 pb-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">About this place</h2>
              <p className="text-airbnb-dark">{property.description}</p>
            </div>
            
            {/* Features and Amenities */}
            <div className="border-b border-gray-200 pb-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-airbnb-dark mr-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Booking Card */}
          <div>
            <Card className="sticky top-24 shadow-lg border-gray-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xl font-bold">${property.price}</span>
                    <span className="text-airbnb-light"> night</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-airbnb-dark mr-1" />
                    <span className="font-medium mr-1">{property.rating}</span>
                    <span className="text-airbnb-light">({property.reviews})</span>
                  </div>
                </div>
                
                <div className="border border-gray-300 rounded-lg overflow-hidden mb-4">
                  <div className="grid grid-cols-2 divide-x divide-gray-300">
                    <div className="p-3">
                      <label className="block text-xs font-medium mb-1">CHECK-IN</label>
                      {checkIn ? (
                        <div className="text-sm">{format(checkIn, 'MMM d, yyyy')}</div>
                      ) : (
                        <div className="text-sm text-gray-500">Add date</div>
                      )}
                    </div>
                    <div className="p-3">
                      <label className="block text-xs font-medium mb-1">CHECKOUT</label>
                      {checkOut ? (
                        <div className="text-sm">{format(checkOut, 'MMM d, yyyy')}</div>
                      ) : (
                        <div className="text-sm text-gray-500">Add date</div>
                      )}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="p-3">
                    <label className="block text-xs font-medium mb-1">GUESTS</label>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{guests} guest{guests !== 1 ? 's' : ''}</span>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-6 w-6 p-0 rounded-full"
                          disabled={guests <= 1}
                          onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                        >
                          -
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-6 w-6 p-0 rounded-full"
                          disabled={guests >= property.maxGuests}
                          onClick={() => setGuests(prev => Math.min(property.maxGuests, prev + 1))}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                      className="border rounded-md p-3"
                    />
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => date < (checkIn || new Date())}
                      className="border rounded-md p-3"
                    />
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-airbnb-red hover:bg-airbnb-red/90 text-white py-3 rounded-lg text-base"
                  onClick={handleBooking}
                >
                  Reserve
                </Button>
                
                <p className="text-center text-sm text-airbnb-light mt-2">You won't be charged yet</p>
                
                {checkIn && checkOut && (
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-airbnb-dark underline">${property.price} x {calculateTotalPrice() / property.price} nights</span>
                      <span>${totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-airbnb-dark underline">Service fee</span>
                      <span>${serviceFee.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-airbnb-super-light py-6 border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 text-center text-airbnb-light">
          © 2025 Airbnb Clone, Inc.
        </div>
      </footer>
    </div>
  );
};

export default PropertyDetail;
