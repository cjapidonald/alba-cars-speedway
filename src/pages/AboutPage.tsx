
import ParallaxHero from "@/components/ParallaxHero";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <ParallaxHero 
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
        height="50vh"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-6">
            <span className="text-electric-cyan text-glow">About</span> Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Albania's premier importer of quality South Korean vehicles.
          </p>
        </div>
      </ParallaxHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glassmorphism p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-rajdhani font-bold mb-6 text-electric-cyan">Our Story</h2>
              <p className="mb-4">We are a brand-new company that sells cars in Albania, imported from South Korea. Founded by automotive enthusiasts with a passion for quality vehicles, ALBACARS was established to bring premium Korean cars to the Albanian market.</p>
              <p className="mb-4">Our vehicles are in excellent condition and have passed all inspection tests. We take pride in our rigorous selection process, ensuring that each car meets our high standards before being offered to our customers.</p>
              <p>From compact city cars to luxury sedans and versatile SUVs, our diverse inventory caters to all preferences and budgets. Whether you're looking to rent, buy, or order a custom vehicle, ALBACARS is your trusted partner in automotive excellence.</p>
            </div>

            <h2 className="text-3xl font-rajdhani font-bold mb-6 text-center">Why Choose Korean Cars?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="glassmorphism p-6 rounded-xl animate-float">
                <div className="text-4xl mb-4 text-turbo-yellow">🔍</div>
                <h3 className="text-xl font-rajdhani font-bold mb-2">Quality</h3>
                <p className="text-white/70">Korean manufacturers are known for their exceptional build quality and reliability.</p>
              </div>
              <div className="glassmorphism p-6 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-4xl mb-4 text-turbo-yellow">💡</div>
                <h3 className="text-xl font-rajdhani font-bold mb-2">Innovation</h3>
                <p className="text-white/70">Advanced technology and modern features come standard in Korean vehicles.</p>
              </div>
              <div className="glassmorphism p-6 rounded-xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-4xl mb-4 text-turbo-yellow">💰</div>
                <h3 className="text-xl font-rajdhani font-bold mb-2">Value</h3>
                <p className="text-white/70">Excellent price-to-performance ratio compared to European counterparts.</p>
              </div>
            </div>

            <div className="glassmorphism p-8 rounded-xl">
              <h2 className="text-3xl font-rajdhani font-bold mb-6 text-electric-cyan">Our Process</h2>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-electric-cyan text-jet flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-xl font-rajdhani font-bold mb-2">Selection</h3>
                    <p className="text-white/70">Our team in South Korea handpicks the best vehicles based on condition, history, and performance.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-electric-cyan text-jet flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-xl font-rajdhani font-bold mb-2">Inspection</h3>
                    <p className="text-white/70">Every vehicle undergoes a rigorous 100-point inspection process before approval.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-electric-cyan text-jet flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-xl font-rajdhani font-bold mb-2">Import</h3>
                    <p className="text-white/70">We handle all logistics, shipping, and customs documentation for a smooth import process.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-electric-cyan text-jet flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-xl font-rajdhani font-bold mb-2">Delivery</h3>
                    <p className="text-white/70">Your vehicle is delivered in pristine condition, ready for the Albanian roads.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
