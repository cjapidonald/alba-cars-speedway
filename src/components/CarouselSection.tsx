
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import CarCard from "./CarCard";

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  rentalPrice?: number;
  images: string[];
}

interface CarouselSectionProps {
  title: string;
  cars: Car[];
  isRental?: boolean;
}

const CarouselSection = ({ title, cars, isRental = false }: CarouselSectionProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons(); // Initial check
      
      // Cleanup
      return () => carousel.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-rajdhani font-bold mb-8 text-gradient">{title}</h2>
        
        <div className="relative">
          {canScrollLeft && (
            <Button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-electric-cyan text-jet rounded-full h-12 w-12 flex items-center justify-center shadow-lg"
              onClick={() => scroll('left')}
            >
              ←
            </Button>
          )}
          
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-none gap-6 pb-4 pl-1 pr-1 snap-x"
          >
            {cars.map(car => (
              <div 
                key={car.id} 
                className="min-w-[300px] md:min-w-[350px] snap-start"
              >
                <CarCard 
                  {...car}
                  isRental={isRental}
                />
              </div>
            ))}
          </div>
          
          {canScrollRight && (
            <Button 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-electric-cyan text-jet rounded-full h-12 w-12 flex items-center justify-center shadow-lg"
              onClick={() => scroll('right')}
            >
              →
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
