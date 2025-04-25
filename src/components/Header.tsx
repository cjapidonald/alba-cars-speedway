
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rent a Car", path: "/rent" },
    { name: "Buy Used Cars", path: "/used" },
    { name: "Order a Car", path: "/order" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "h-14 bg-jet/70 glassmorphism border-b border-electric-cyan/20" 
          : "h-20 bg-transparent"
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <Logo className={cn("transition-all duration-300", scrolled ? "h-8" : "h-10")} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-rajdhani font-medium text-glacier-white hover:text-electric-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-electric-cyan text-jet hover:bg-turbo-yellow neon-border">
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 glassmorphism py-4 lg:hidden">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-rajdhani font-medium text-glacier-white hover:text-electric-cyan transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-electric-cyan text-jet hover:bg-turbo-yellow w-full">
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
