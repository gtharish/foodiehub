import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChefHat, Heart, Moon, Sun, Home, Refrigerator } from 'lucide-react'; // <--- Import Refrigerator
import { motion } from 'framer-motion';

const Navbar = ({ dark, toggleDark }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -80 }} 
      animate={{ y: 0 }}
      className={`${dark ? 'bg-gray-900 border-b border-gray-800' : 'bg-white'} shadow-sm sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <ChefHat className="text-orange-500" size={32} />
          <h1 className={`${dark ? "text-white" : "text-gray-900"} font-bold text-2xl`}>FoodieHub</h1>
        </Link>
        
        <div className="flex items-center space-x-8">
          {/* Home Link */}
          <Link to="/" className={`${isActive('/') ? "text-orange-500" : dark ? "text-gray-300" : "text-gray-700"} hover:text-orange-500 transition-colors`}>
            <Home size={24} />
          </Link>
          
          {/* Fridge Link (NEW) */}
          <Link to="/fridge" className={`${isActive('/fridge') ? "text-orange-500" : dark ? "text-gray-300" : "text-gray-700"} hover:text-orange-500 transition-colors`} title="Fridge Finder">
            <Refrigerator size={24} />
          </Link>

          {/* Favorites (Placeholder) */}
          <button className={`${dark ? "text-gray-300 hover:text-red-400" : "text-gray-700 hover:text-red-500"} transition-colors`}>
            <Heart size={24} />
          </button>
          
          <button 
            onClick={toggleDark} 
            className="p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 bg-gray-500 transition-all"
          >
            {dark ? <Moon className="text-yellow-300" size={20} /> : <Sun className="text-orange-500" size={20} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;