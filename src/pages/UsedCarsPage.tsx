
import ParallaxHero from "@/components/ParallaxHero";

const UsedCarsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <ParallaxHero 
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
        height="50vh"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-6">
            <span className="text-turbo-yellow">Buy</span> <span className="text-electric-cyan text-glow">Used Cars</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Certified imports from South Korea. Quality vehicles with complete inspection history.
          </p>
        </div>
      </ParallaxHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glassmorphism p-4 rounded-xl mb-12 flex items-center">
            <input 
              type="text" 
              placeholder="Search by make, model, or year..."
              className="w-full bg-transparent border-none focus:outline-none text-lg"
            />
            <button className="bg-electric-cyan text-jet px-6 py-2 rounded-lg">
              Search
            </button>
          </div>

          <h2 className="text-3xl font-rajdhani font-bold mb-8">Featured Used Cars</h2>
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

export default UsedCarsPage;
