
import ParallaxHero from "@/components/ParallaxHero";

const RentPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <ParallaxHero 
        backgroundImage="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80"
        height="50vh"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-6">
            <span className="text-electric-cyan text-glow">Rent</span> a Car
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Premium vehicles for your journey. Flexible rental options to suit your needs.
          </p>
        </div>
      </ParallaxHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glassmorphism p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-rajdhani font-bold mb-6">Filter Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm">Date Range</label>
                <input 
                  type="date" 
                  className="w-full bg-white/5 border border-electric-cyan/30 rounded p-2"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm">Vehicle Type</label>
                <select className="w-full bg-white/5 border border-electric-cyan/30 rounded p-2">
                  <option>All Types</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Luxury</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm">Location</label>
                <select className="w-full bg-white/5 border border-electric-cyan/30 rounded p-2">
                  <option>Tirana</option>
                  <option>Durrës</option>
                  <option>Vlorë</option>
                </select>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-rajdhani font-bold mb-8">Available Vehicles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="skeleton h-80 rounded-lg"></div>
            <div className="skeleton h-80 rounded-lg"></div>
            <div className="skeleton h-80 rounded-lg"></div>
            <div className="skeleton h-80 rounded-lg"></div>
            <div className="skeleton h-80 rounded-lg"></div>
            <div className="skeleton h-80 rounded-lg"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentPage;
