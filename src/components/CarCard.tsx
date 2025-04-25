
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CarCardProps {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  rentalPrice?: number;
  images: string[];
  isRental?: boolean;
}

const CarCard = ({ id, make, model, year, price, rentalPrice, images, isRental = false }: CarCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="rounded-lg glassmorphism group card-hover overflow-hidden">
      <div className="relative w-full aspect-video overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 skeleton"></div>
        )}
        <img
          src={images[0]}
          alt={`${make} ${model}`}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
            !imageLoaded && "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-rajdhani font-bold">
            {make} {model}
          </h3>
          <span className="text-sm bg-gradient-to-r from-electric-cyan to-turbo-yellow bg-clip-text text-transparent font-bold">
            {year}
          </span>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-sm text-glacier-white/60">
              {isRental ? 'Rental price' : 'Purchase price'}
            </p>
            <p className="text-xl font-bold font-rajdhani text-electric-cyan">
              {isRental ? `${rentalPrice}€/day` : `${price.toLocaleString()}€`}
            </p>
          </div>
          
          <Button 
            className="bg-white/5 border border-electric-cyan/30 hover:bg-electric-cyan hover:text-jet transition-all"
          >
            {isRental ? 'Book Now' : 'View Details'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
