import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);

  const handleWishlistToggle = (product) => {
    const updatedWishlist = wishlist.filter(p => p._id !== product._id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-luxury py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heart className="mx-auto mb-4 text-gold" size={64} />
          <h1 className="text-5xl font-bold text-gold mb-4">My Wishlist</h1>
          <p className="text-gray-300 text-lg">Your favorite pieces, curated just for you</p>
        </div>
        
        {wishlist.length === 0 ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-16"
          >
            <Heart className="mx-auto mb-6 text-gray-500" size={96} />
            <h2 className="text-2xl font-semibold text-gray-400 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8">Start exploring our collection and add your favorite pieces</p>
            <a 
              href="/shop" 
              className="inline-block bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
            >
              Explore Collection
            </a>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {wishlist.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onWishlistToggle={handleWishlistToggle}
                isInWishlist={true}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Wishlist;