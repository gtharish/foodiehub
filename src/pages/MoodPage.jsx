import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RecipeCard from '../components/RecipeCard';
import { recipesData } from '../data/recipes';

const MoodPage = ({ dark }) => {
  const { type } = useParams();
  const filteredRecipes = recipesData.filter(r => r.mood === type);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/" className="text-orange-500 font-bold hover:underline">← Back Home</Link>
        <h1 className={`text-4xl font-bold mt-2 capitalize ${dark ? "text-white" : "text-gray-900"}`}>
           {type} Mode Recipes
        </h1>
        <p className={dark ? "text-gray-400" : "text-gray-600"}>Here is what we recommend for your mood.</p>
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredRecipes.map(r => (
            <RecipeCard key={r.id} r={r} dark={dark} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl text-gray-500">No recipes found for this mood yet! 🥕</h2>
        </div>
      )}
    </div>
  );
};

export default MoodPage;