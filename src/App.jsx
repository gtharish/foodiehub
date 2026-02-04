import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import MoodPage from './pages/MoodPage';
import FridgePage from './pages/FridgePage'; // <--- IMPORT THIS

function App() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    if (!dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar dark={dark} toggleDark={toggleDark} />
      
      <Routes>
        <Route path="/" element={<Home dark={dark} />} />
        <Route path="/recipe/:id" element={<RecipeDetail dark={dark} />} />
        <Route path="/mood/:type" element={<MoodPage dark={dark} />} />
        <Route path="/fridge" element={<FridgePage dark={dark} />} /> {/* <--- ADD THIS ROUTE */}
      </Routes>
    </div>
  );
}

export default App;