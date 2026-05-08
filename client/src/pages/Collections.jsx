import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const API_URL = import.meta.env.VITE_API_URL || 'https://jewelry-platform.onrender.com';

const Collections = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${API_URL}/api/products/all`);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory);

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
      className="min-h-screen bg-luxury py-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gold text-center mb-12">Explore Collections</h1>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold text-black shadow-lg'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onWishlistToggle={handleWishlistToggle}
              isInWishlist={wishlist.some(p => p._id === product._id)}
            />
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-400 mt-16">
            <p className="text-xl">No products found in this category.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Collections;