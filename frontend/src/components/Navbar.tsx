import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Teebay</Link>
        <div className="space-x-4">
          <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
              <Link to="/new-product" className="text-white hover:text-gray-300">New Product</Link>
              <Button onClick={logout} variant="ghost" className="text-white hover:text-gray-300">Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
              <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
