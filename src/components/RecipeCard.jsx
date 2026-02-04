import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react'; 
import { motion } from 'framer-motion';

const RecipeCard = ({ r, dark }) => (
  <Link to={`/recipe/${r.id}`}>
    <motion.div 
      whileHover={{ y: -5 }}
      className={`${dark ? "bg-gray-800" : "bg-white"} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col`}
    >
      <div className="text-7xl h-48 flex justify-center items-center bg-gradient-to-br from-orange-100 to-orange-200">
        {r.image}
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{r.category}</span>
          <h3 className={`${dark ? "text-white" : "text-gray-900"} font-bold text-xl mt-1 mb-2`}>{r.name}</h3>
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-500 border-t border-gray-200/20 pt-4 mt-2">
          <span className="flex items-center"><Clock size={16} className="mr-1" />{r.time}</span>
          <span className="flex items-center font-semibold text-green-600">
             {r.cost}
          </span>
        </div>
      </div>
    </motion.div>
  </Link>
);

export default RecipeCard;