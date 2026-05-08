import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5002';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: '',
    stock: '',
    featured: false,
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!imageFile) return '';
    const formDataUpload = new FormData();
    formDataUpload.append('image', imageFile);
    const response = await axios.post(`${API_URL}/api/upload`, formDataUpload);
    return response.data.imageUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const imageUrl = await uploadImage();
      const productData = { ...formData, image: imageUrl || formData.image };
      await axios.post(`${API_URL}/api/products/add`, productData);
      setMessage('Product added successfully');
      setFormData({
        name: '',
        price: '',
        category: '',
        image: '',
        description: '',
        stock: '',
        featured: false,
      });
      setImageFile(null);
    } catch (error) {
      setMessage('Error adding product');
    }
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8"
    >
      <h1 className="text-3xl font-bold text-gold mb-8">Add Product</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block text-white">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
          />
          {imageFile && <img src={URL.createObjectURL(imageFile)} alt="Preview" className="mt-2 w-32 h-32 object-cover" />}
        </div>
        <div className="mb-4">
          <label className="block text-white">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Stock Quantity</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="mr-2"
            />
            Featured
          </label>
        </div>
        <button
          type="submit"
          className="bg-gold text-black px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Product'}
        </button>
        {message && <p className="mt-4 text-green-400">{message}</p>}
      </form>
    </motion.div>
  );
};

export default AddProduct;