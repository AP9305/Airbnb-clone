
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useWishlist } from '@/contexts/WishlistContext';
import { cn } from '@/lib/utils';

type WishlistButtonProps = {
  propertyId: string;
  className?: string;
};

const WishlistButton = ({ propertyId, className }: WishlistButtonProps) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isFavorite = isInWishlist(propertyId);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFavorite) {
      removeFromWishlist(propertyId);
    } else {
      addToWishlist(propertyId);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "absolute top-2 right-2 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white/90 z-10",
        className
      )}
      onClick={toggleWishlist}
    >
      <Heart 
        className={cn(
          "h-5 w-5", 
          isFavorite ? "fill-airbnb-red text-airbnb-red" : "text-gray-700"
        )} 
      />
    </Button>
  );
};

export default WishlistButton;
