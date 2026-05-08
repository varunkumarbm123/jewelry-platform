import { useEffect, useState } from 'react';
import axios from 'axios';
import { Edit, Trash2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'https://jewelry-platform.onrender.com';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/api/products/all`);
    setProducts(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/api/products/${id}`);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditing(product._id);
    setEditForm(product);
  };

  const handleUpdate = async () => {
    await axios.put(`${API_URL}/api/products/${editing}`, editForm);
    setEditing(null);
    fetchProducts();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gold mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-gray-800 p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
            {editing === product._id ? (
              <div>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white rounded mb-2"
                />
                <input
                  type="number"
                  value={editForm.price}
                  onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white rounded mb-2"
                />
                <input
                  type="text"
                  value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white rounded mb-2"
                />
                <input
                  type="text"
                  value={editForm.image}
                  onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white rounded mb-2"
                />
                <textarea
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white rounded mb-2"
                />
                <input
                  type="number"
                  value={editForm.stock}
                  onChange={(e) => setEditForm({ ...editForm, stock: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white rounded mb-2"
                />
                <label className="flex items-center text-white mb-2">
                  <input
                    type="checkbox"
                    checked={editForm.featured}
                    onChange={(e) => setEditForm({ ...editForm, featured: e.target.checked })}
                    className="mr-2"
                  />
                  Featured
                </label>
                <button onClick={handleUpdate} className="bg-gold text-black px-4 py-2 rounded mr-2">Update</button>
                <button onClick={() => setEditing(null)} className="bg-gray-600 text-white px-4 py-2 rounded">Cancel</button>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gold">₹{product.price}</p>
                <p className="text-gray-400">{product.category}</p>
                <p className="text-gray-400">Stock: {product.stock}</p>
                {product.featured && <span className="bg-gold text-black px-2 py-1 rounded text-sm">Featured</span>}
                <p className="text-gray-400 text-sm">{new Date(product.createdAt).toLocaleDateString()}</p>
                <div className="mt-4 flex">
                  <button onClick={() => handleEdit(product)} className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
                    <Edit size={16} />
                  </button>
                  <button onClick={() => handleDelete(product._id)} className="bg-red-600 text-white px-4 py-2 rounded">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;