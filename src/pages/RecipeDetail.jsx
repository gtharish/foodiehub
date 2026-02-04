import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, DollarSign } from 'lucide-react';
import { recipesData } from '../data/recipes';

const RecipeDetail = ({ dark }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipesData.find(r => r.id === parseInt(id));

  if (!recipe) return <div className="text-center mt-20 text-2xl">Recipe Not Found 😕</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto px-4 py-8"
    >
      <button onClick={() => navigate(-1)} className={`flex items-center mb-6 ${dark ? "text-gray-300" : "text-gray-600"} hover:text-orange-500`}>
        <ArrowLeft className="mr-2" /> Back
      </button>

      <div className={`${dark ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-xl overflow-hidden`}>
        <div className="h-64 bg-orange-100 flex items-center justify-center text-9xl">
          {recipe.image}
        </div>
        
        <div className="p-8">
          <h1 className={`text-4xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>{recipe.name}</h1>
          
          <div className="flex space-x-6 text-lg text-gray-500 mb-8 border-b border-gray-200 pb-6">
            <span className="flex items-center"><Clock className="mr-2" /> {recipe.time}</span>
            <span className="flex items-center text-green-600 font-bold">Cost: {recipe.cost}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Ingredients</h2>
              <ul className={`list-disc pl-5 space-y-2 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Instructions</h2>
              <ol className={`list-decimal pl-5 space-y-3 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeDetail;