import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Logout } from "../components/Logout";

export const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Teebay</h1>
      {isAuthenticated ? (
        <>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/products" className="text-blue-500 hover:underline">
                  View Products
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-blue-500 hover:underline">
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-blue-500 hover:underline">
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-4">
            <Logout />
          </div>
        </>
      ) : (
        <p>
          Please{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            login
          </Link>{" "}
          or{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            register
          </Link>{" "}
          to access Teebay.
        </p>
      )}
    </div>
  );
};
