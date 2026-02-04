import React from 'react';
import { motion } from 'framer-motion';
import { Shuffle, Smile, Frown, Zap, Wallet } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { recipesData } from '../data/recipes';

const moods = [
  { name: 'Happy', id: 'happy', icon: <Smile />, color: 'bg-yellow-400' },
  { name: 'Sad', id: 'sad', icon: <Frown />, color: 'bg-blue-400' },
  { name: 'Broke', id: 'broke', icon: <Wallet />, color: 'bg-green-400' },
  { name: 'Energetic', id: 'energetic', icon: <Zap />, color: 'bg-red-400' },
];

const Home = ({ dark }) => {
  const navigate = useNavigate();

  const handleSurprise = () => {
    const random = recipesData[Math.floor(Math.random() * recipesData.length)];
    navigate(`/recipe/${random.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${dark ? "text-white" : "text-gray-900"}`}>
          What's your <span className="text-orange-500">Mood?</span>
        </h1>
        <p className={`text-xl ${dark ? "text-gray-400" : "text-gray-600"} mb-8`}>
          Don't know what to cook? Let your feelings decide.
        </p>
        
        <button onClick={handleSurprise}
          className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:scale-105 active:scale-95">
          <Shuffle className="mr-2" /> Surprise Me
        </button>
      </motion.div>

      {/* Mood Selector Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {moods.map((m) => (
          <Link key={m.id} to={`/mood/${m.id}`}>
            <motion.div whileHover={{ scale: 1.05 }} className={`${m.color} h-32 rounded-2xl flex flex-col items-center justify-center cursor-pointer shadow-lg text-white`}>
              <div className="text-4xl mb-2">{m.icon}</div>
              <span className="font-bold text-lg">{m.name}</span>
            </motion.div>
          </Link>
        ))}
      </div>

      <h2 className={`text-3xl font-bold mb-8 ${dark ? "text-white" : "text-gray-800"}`}>Popular Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recipesData.slice(0, 6).map(r => (
          <RecipeCard key={r.id} r={r} dark={dark} />
        ))}
      </div>
    </div>
  );
};

export default Home;