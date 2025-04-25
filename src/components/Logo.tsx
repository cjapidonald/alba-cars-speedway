
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <span className="text-2xl font-rajdhani font-bold text-electric-cyan text-glow mr-1">ALBA</span>
      <span className="text-2xl font-rajdhani font-bold text-turbo-yellow">CARS</span>
    </div>
  );
};

export default Logo;
