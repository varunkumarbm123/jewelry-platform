import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Luxury Jewelry</h3>
            <p className="text-gray-400 mb-4">
              Timeless elegance and exquisite craftsmanship for discerning tastes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-gold transition-colors">Shop</Link></li>
              <li><Link to="/collections" className="text-gray-400 hover:text-gold transition-colors">Collections</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Phone className="mr-2 text-gold" size={16} />
                +91 12345 67890
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 text-gold" size={16} />
                info@luxuryjewelry.com
              </p>
              <p className="flex items-start">
                <MapPin className="mr-2 mt-1 text-gold" size={16} />
                <span>123 Luxury Street<br />Mumbai, Maharashtra 400001<br />India</span>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive updates on new collections and exclusive offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:border-gold"
              />
              <button className="bg-gold text-black px-4 py-2 rounded-r-lg hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="mx-2 text-red-500" size={16} /> &copy; 2026 Luxury Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;