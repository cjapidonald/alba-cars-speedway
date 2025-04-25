
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-jet border-t border-electric-cyan/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-glacier-white/70">
              Premium car commerce in Albania. Import, rent, and purchase quality vehicles from South Korea.
            </p>
            <div className="mt-4">
              <p className="text-electric-cyan font-bold">Move Faster.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-rajdhani font-bold mb-4 text-glacier-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-glacier-white/70 hover:text-electric-cyan transition-colors">Home</Link></li>
              <li><Link to="/rent" className="text-glacier-white/70 hover:text-electric-cyan transition-colors">Rent a Car</Link></li>
              <li><Link to="/used" className="text-glacier-white/70 hover:text-electric-cyan transition-colors">Buy Used Cars</Link></li>
              <li><Link to="/order" className="text-glacier-white/70 hover:text-electric-cyan transition-colors">Order a Car</Link></li>
              <li><Link to="/about" className="text-glacier-white/70 hover:text-electric-cyan transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-glacier-white/70 hover:text-electric-cyan transition-colors">Contact / Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-rajdhani font-bold mb-4 text-glacier-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-electric-cyan mr-2">📍</span>
                <span className="text-glacier-white/70">Tirana, Albania</span>
              </li>
              <li className="flex items-center">
                <span className="text-electric-cyan mr-2">📱</span>
                <span className="text-glacier-white/70">+355 69 123 4567</span>
              </li>
              <li className="flex items-center">
                <span className="text-electric-cyan mr-2">✉️</span>
                <span className="text-glacier-white/70">info@albacars.al</span>
              </li>
            </ul>
            
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-glacier-white/70 hover:text-electric-cyan transition-colors">FB</a>
              <a href="#" className="text-glacier-white/70 hover:text-electric-cyan transition-colors">IG</a>
              <a href="#" className="text-glacier-white/70 hover:text-electric-cyan transition-colors">TW</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-glacier-white/10 text-center text-glacier-white/50">
          <p>&copy; {new Date().getFullYear()} ALBACARS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
