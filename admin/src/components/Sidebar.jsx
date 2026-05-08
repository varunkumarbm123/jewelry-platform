import { Link } from 'react-router-dom';
import { Home, Plus, List } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-luxury h-screen p-4">
      <h1 className="text-2xl font-bold text-gold mb-8">Jewelry Admin</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/" className="flex items-center text-white hover:text-gold">
              <Home className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/add-product" className="flex items-center text-white hover:text-gold">
              <Plus className="mr-2" />
              Add Product
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/all-products" className="flex items-center text-white hover:text-gold">
              <List className="mr-2" />
              All Products
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;