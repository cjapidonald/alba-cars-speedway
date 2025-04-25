
import { Button } from "@/components/ui/button";
import ParallaxHero from "@/components/ParallaxHero";
import ServiceCard from "@/components/ServiceCard";
import CarouselSection from "@/components/CarouselSection";
import { Link } from "react-router-dom";

// Mock data for featured cars
const FEATURED_CARS = [
  {
    id: "car1",
    make: "Hyundai",
    model: "Tucson",
    year: 2023,
    price: 25000,
    rentalPrice: 65,
    images: ["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2070"]
  },
  {
    id: "car2",
    make: "Kia",
    model: "Sportage",
    year: 2022,
    price: 22500,
    rentalPrice: 60,
    images: ["https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2071"]
  },
  {
    id: "car3",
    make: "Genesis",
    model: "G80",
    year: 2023,
    price: 48000,
    rentalPrice: 120,
    images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2064"]
  },
  {
    id: "car4",
    make: "Kia",
    model: "EV6",
    year: 2023,
    price: 42000,
    rentalPrice: 95,
    images: ["https://images.unsplash.com/photo-1669228048575-c3d35e253eec?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2072"]
  },
  {
    id: "car5",
    make: "Hyundai",
    model: "Sonata",
    year: 2022,
    price: 26500,
    rentalPrice: 70,
    images: ["https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2071"]
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxHero 
        backgroundImage="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-6 text-gradient">
            <span className="text-electric-cyan text-glow">Move</span> <span className="text-turbo-yellow">Faster.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium South Korean vehicles available for rent, purchase, or custom order in Albania.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-electric-cyan text-jet hover:bg-electric-cyan/80">
              <Link to="/rent">Rent a Car</Link>
            </Button>
            <Button asChild size="lg" className="bg-turbo-yellow text-jet hover:bg-turbo-yellow/80">
              <Link to="/used">Browse Used Cars</Link>
            </Button>
          </div>
        </div>
      </ParallaxHero>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-rajdhani font-bold mb-16 text-center text-gradient">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Rent a Car"
              description="Premium vehicles available for short or long-term rental. Flexible plans for your needs."
              icon="🚗"
              link="/rent"
              color="cyan"
            />
            <ServiceCard
              title="Buy Used Cars"
              description="Certified pre-owned vehicles imported directly from South Korea with complete inspection history."
              icon="🏆"
              link="/used"
              color="yellow"
            />
            <ServiceCard
              title="Order a Car"
              description="Configure and order your dream vehicle. We handle import logistics and delivery."
              icon="✨"
              link="/order"
              color="cyan"
            />
          </div>
        </div>
      </section>

      {/* Featured Fleet Carousel */}
      <CarouselSection 
        title="Featured Fleet" 
        cars={FEATURED_CARS} 
      />

      {/* Stats Section */}
      <section className="py-20 glassmorphism">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-rajdhani font-bold text-electric-cyan mb-2">250+</div>
              <p className="text-lg">Cars Imported</p>
            </div>
            <div>
              <div className="text-5xl font-rajdhani font-bold text-turbo-yellow mb-2">100%</div>
              <p className="text-lg">Tests Passed</p>
            </div>
            <div>
              <div className="text-5xl font-rajdhani font-bold text-electric-cyan mb-2">5000+</div>
              <p className="text-lg">Kilometers of Smiles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-rajdhani font-bold mb-6">Ready to Move Faster?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the quality and reliability of ALBACARS. Whether you're renting, buying, or ordering, we've got the perfect vehicle for you.
          </p>
          <Button asChild size="lg" className="bg-electric-cyan text-jet hover:bg-electric-cyan/80">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
