import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-luxury shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-gold hover:text-yellow-300 transition-colors">
          Luxury Jewelry
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-gold transition-colors font-medium">Home</Link>
          <Link to="/shop" className="text-white hover:text-gold transition-colors font-medium">Shop</Link>
          <Link to="/collections" className="text-white hover:text-gold transition-colors font-medium">Collections</Link>
          <Link to="/contact" className="text-white hover:text-gold transition-colors font-medium">Contact</Link>
          <Link to="/wishlist" className="text-white hover:text-gold flex items-center font-medium">
            <Heart className="mr-2" size={18} />
            Wishlist
          </Link>
        </nav>
        <button 
          className="md:hidden text-white hover:text-gold transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-luxury border-t border-gray-700"
        >
          <div className="px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-white hover:text-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="block text-white hover:text-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/collections" 
              className="block text-white hover:text-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </Link>
            <Link 
              to="/contact" 
              className="block text-white hover:text-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/wishlist" 
              className="block text-white hover:text-gold flex items-center py-2"
              onClick={() => setIsOpen(false)}
            >
              <Heart className="mr-2" size={18} />
              Wishlist
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;