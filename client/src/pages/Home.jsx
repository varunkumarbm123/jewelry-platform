import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { Sparkles, Crown, Gem } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'https://jewelry-platform.onrender.com';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${API_URL}/api/products/all`);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const featuredProducts = products.filter(p => p.featured);
  const latestProducts = products.slice(0, 6);

  const handleWishlistToggle = (product) => {
    const updatedWishlist = wishlist.some(p => p._id === product._id)
      ? wishlist.filter(p => p._id !== product._id)
      : [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-luxury to-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold mb-4 text-gold"
          >
            Luxury Jewelry Collection
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl mb-8"
          >
            Discover timeless elegance and exquisite craftsmanship
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center space-x-8"
          >
            <div className="text-center">
              <Sparkles className="mx-auto mb-2 text-gold" size={48} />
              <p>Premium Quality</p>
            </div>
            <div className="text-center">
              <Crown className="mx-auto mb-2 text-gold" size={48} />
              <p>Royal Heritage</p>
            </div>
            <div className="text-center">
              <Gem className="mx-auto mb-2 text-gold" size={48} />
              <p>Fine Gems</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-luxury">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onWishlistToggle={handleWishlistToggle}
                isInWishlist={wishlist.some(p => p._id === product._id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Arrivals */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Latest Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onWishlistToggle={handleWishlistToggle}
                isInWishlist={wishlist.some(p => p._id === product._id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-luxury">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gold mb-8">About Our Craftsmanship</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            For generations, we have been dedicated to creating exquisite jewelry pieces that tell stories of love, elegance, and timeless beauty. Each piece is meticulously crafted by master artisans using the finest materials and traditional techniques passed down through centuries.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;