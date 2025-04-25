
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: "cyan" | "yellow";
}

const ServiceCard = ({ title, description, icon, link, color }: ServiceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[300px] perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-all duration-500 preserve-3d",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 glassmorphism rounded-xl p-6 flex flex-col items-center justify-center backface-hidden border-t border-white/20">
          <div className={cn(
            "text-5xl mb-4",
            color === "cyan" ? "text-electric-cyan" : "text-turbo-yellow"
          )}>
            {icon}
          </div>
          <h3 className="text-2xl font-rajdhani font-bold mb-2">{title}</h3>
        </div>

        {/* Back */}
        <div className="absolute inset-0 glassmorphism rounded-xl p-6 flex flex-col items-center justify-between rotate-y-180 backface-hidden">
          <h3 className={cn(
            "text-2xl font-rajdhani font-bold",
            color === "cyan" ? "text-electric-cyan" : "text-turbo-yellow"
          )}>
            {title}
          </h3>
          <p className="text-center text-glacier-white/80 my-4">{description}</p>
          <Button asChild className={cn(
            "w-full",
            color === "cyan" 
              ? "bg-electric-cyan text-jet hover:bg-electric-cyan/80" 
              : "bg-turbo-yellow text-jet hover:bg-turbo-yellow/80"
          )}>
            <Link to={link}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
