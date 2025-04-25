
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxHeroProps {
  backgroundImage: string;
  midLayer?: ReactNode;
  children: ReactNode;
  className?: string;
  height?: string;
}

const ParallaxHero = ({
  backgroundImage,
  midLayer,
  children,
  className,
  height = "100vh"
}: ParallaxHeroProps) => {
  return (
    <div className={cn("relative w-full overflow-hidden", className)} style={{ height }}>
      {/* Background Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-back"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-jet/80 to-jet/95"></div>
      </div>
      
      {/* Middle Layer */}
      {midLayer && (
        <div className="absolute inset-0 flex items-center justify-center parallax-mid">
          {midLayer}
        </div>
      )}
      
      {/* Front Layer (Content) */}
      <div className="absolute inset-0 flex items-center justify-center parallax-front">
        {children}
      </div>
    </div>
  );
};

export default ParallaxHero;
