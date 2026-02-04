import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, X } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { recipesData } from '../data/recipes';

const FridgePage = ({ dark }) => {
  const [selected, setSelected] = useState([]);

  // 1. Extract all unique ingredients from the data automatically
  const allIngredients = useMemo(() => {
    const ingredients = recipesData.flatMap(r => r.ingredients);
    return [...new Set(ingredients)].sort();
  }, []);

  // 2. Toggle selection
  const toggleIng = (ing) => {
    if (selected.includes(ing)) {
      setSelected(selected.filter(i => i !== ing));
    } else {
      setSelected([...selected, ing]);
    }
  };

  // 3. Find matches (Logic: Show recipe if it uses ANY of the selected ingredients)
  const matchingRecipes = recipesData.filter(recipe => 
    selected.some(sel => recipe.ingredients.some(ing => ing.includes(sel)))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <h1 className={`text-4xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
          What's in your <span className="text-green-500">Fridge?</span> 🥦
        </h1>
        <p className={dark ? "text-gray-400" : "text-gray-600"}>
          Select the ingredients you have, and we'll tell you what to cook.
        </p>
      </motion.div>

      {/* Ingredient Selector */}
      <div className={`p-6 rounded-2xl shadow-sm mb-12 ${dark ? "bg-gray-800" : "bg-white"}`}>
        <h3 className={`font-bold mb-4 ${dark ? "text-gray-300" : "text-gray-700"}`}>Select Ingredients:</h3>
        <div className="flex flex-wrap gap-3">
          {allIngredients.map(ing => (
            <button
              key={ing}
              onClick={() => toggleIng(ing)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                ${selected.includes(ing)
                  ? "bg-green-500 text-white border-green-500 shadow-md transform scale-105"
                  : dark 
                    ? "bg-gray-700 text-gray-300 border-gray-600 hover:border-gray-500" 
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300"
                }`}
            >
              {ing}
            </button>
          ))}
        </div>
        
        {selected.length > 0 && (
          <div className="mt-6 flex justify-end">
             <button onClick={() => setSelected([])} className="text-red-500 text-sm flex items-center hover:underline">
               <X size={16} className="mr-1"/> Clear All
             </button>
          </div>
        )}
      </div>

      {/* Results Area */}
      <div>
        <h2 className={`text-2xl font-bold mb-6 ${dark ? "text-white" : "text-gray-800"}`}>
          {selected.length === 0 ? "All Recipes" : `You can make (${matchingRecipes.length}) recipes:`}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {(selected.length === 0 ? recipesData : matchingRecipes).map(r => (
               <RecipeCard key={r.id} r={r} dark={dark} />
            ))}
          </AnimatePresence>
        </div>
        
        {selected.length > 0 && matchingRecipes.length === 0 && (
          <div className="text-center py-20 opacity-50">
            <ChefHat size={48} className="mx-auto mb-4" />
            <p>No recipes match those ingredients perfectly. Try selecting fewer items!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FridgePage;