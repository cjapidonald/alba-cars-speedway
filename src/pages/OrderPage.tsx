
import ParallaxHero from "@/components/ParallaxHero";
import { Button } from "@/components/ui/button";

const OrderPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <ParallaxHero 
        backgroundImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
        height="50vh"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-6">
            <span className="text-electric-cyan text-glow">Order</span> a Car
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Configure and order your dream vehicle. We handle import logistics and delivery.
          </p>
        </div>
      </ParallaxHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-electric-cyan text-jet flex items-center justify-center font-bold">1</div>
                <div className="ml-3">
                  <p className="font-rajdhani font-bold">Choose Model</p>
                </div>
              </div>
              <div className="h-1 flex-grow mx-4 bg-white/10"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">2</div>
                <div className="ml-3">
                  <p className="font-rajdhani font-bold text-white/50">Customize</p>
                </div>
              </div>
              <div className="h-1 flex-grow mx-4 bg-white/10"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">3</div>
                <div className="ml-3">
                  <p className="font-rajdhani font-bold text-white/50">Test Drive</p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-8 rounded-xl">
              <h2 className="text-2xl font-rajdhani font-bold mb-6">Select a Model</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-electric-cyan/20 rounded-lg p-4 hover:border-electric-cyan transition-colors cursor-pointer">
                  <div className="skeleton h-40 rounded-md mb-4"></div>
                  <h3 className="text-xl font-rajdhani font-bold">Hyundai</h3>
                  <p className="text-white/70">Multiple models available</p>
                </div>
                <div className="border border-electric-cyan/20 rounded-lg p-4 hover:border-electric-cyan transition-colors cursor-pointer">
                  <div className="skeleton h-40 rounded-md mb-4"></div>
                  <h3 className="text-xl font-rajdhani font-bold">Kia</h3>
                  <p className="text-white/70">Multiple models available</p>
                </div>
                <div className="border border-electric-cyan/20 rounded-lg p-4 hover:border-electric-cyan transition-colors cursor-pointer">
                  <div className="skeleton h-40 rounded-md mb-4"></div>
                  <h3 className="text-xl font-rajdhani font-bold">Genesis</h3>
                  <p className="text-white/70">Luxury models available</p>
                </div>
                <div className="border border-electric-cyan/20 rounded-lg p-4 hover:border-electric-cyan transition-colors cursor-pointer">
                  <div className="skeleton h-40 rounded-md mb-4"></div>
                  <h3 className="text-xl font-rajdhani font-bold">Custom Order</h3>
                  <p className="text-white/70">Any Korean vehicle</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button className="bg-electric-cyan text-jet hover:bg-electric-cyan/80">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
