import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const API_URL = import.meta.env.VITE_API_URL || 'https://jewelry-platform.onrender.com';

const ProductCard = ({ product, onWishlistToggle, isInWishlist }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="glassmorphism rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative">
        <img src={`${API_URL}${product.image}`} alt={product.name} className="w-full h-64 object-cover" />
        <button
          onClick={() => onWishlistToggle(product)}
          className={`absolute top-4 right-4 p-2 rounded-full ${isInWishlist ? 'text-red-500 bg-white' : 'text-white bg-black bg-opacity-50'}`}
        >
          <Heart fill={isInWishlist ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gold">{product.name}</h3>
        <p className="text-2xl font-bold text-white">₹{product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;