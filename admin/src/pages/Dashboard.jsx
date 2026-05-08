import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://jewelry-platform.onrender.com';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${API_URL}/api/products/all`);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-2xl">{products.length}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Featured Products</h2>
          <p className="text-2xl">{products.filter(p => p.featured).length}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Total Stock</h2>
          <p className="text-2xl">{products.reduce((sum, p) => sum + p.stock, 0)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;