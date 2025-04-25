
import ParallaxHero from "@/components/ParallaxHero";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <ParallaxHero 
        backgroundImage="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"
        height="50vh"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-6">
            <span className="text-electric-cyan text-glow">Contact</span> Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions about our vehicles or services? Get in touch with our team.
          </p>
        </div>
      </ParallaxHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-rajdhani font-bold mb-6">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-electric-cyan/30 rounded p-3 focus:outline-none focus:border-electric-cyan"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-electric-cyan/30 rounded p-3 focus:outline-none focus:border-electric-cyan"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-electric-cyan/30 rounded p-3 focus:outline-none focus:border-electric-cyan"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-electric-cyan/30 rounded p-3 focus:outline-none focus:border-electric-cyan"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-electric-cyan text-jet hover:bg-electric-cyan/80 animate-glow-pulse"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div className="glassmorphism p-8 rounded-xl">
              <h2 className="text-3xl font-rajdhani font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-electric-cyan mb-1">Address</p>
                  <p>123 Car Boulevard, Tirana, Albania</p>
                </div>
                <div>
                  <p className="font-medium text-electric-cyan mb-1">Phone</p>
                  <p>+355 69 123 4567</p>
                </div>
                <div>
                  <p className="font-medium text-electric-cyan mb-1">Email</p>
                  <p>info@albacars.al</p>
                </div>
                <div>
                  <p className="font-medium text-electric-cyan mb-1">Business Hours</p>
                  <p>Monday-Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-rajdhani font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-electric-cyan/20 transition-colors">FB</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-electric-cyan/20 transition-colors">IG</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-electric-cyan/20 transition-colors">TW</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-rajdhani font-bold mb-6">Visit Our Showroom</h2>
            <div className="w-full h-[400px] glassmorphism rounded-xl flex items-center justify-center">
              <p className="text-glacier-white/50">Interactive map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
