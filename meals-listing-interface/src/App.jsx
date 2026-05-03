import React from 'react'
import { useState,useEffect } from 'react'
import MealCard from './components/MealCard.jsx'
const App = () => {

  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/meals")
        
        if (!response.ok)throw new Error(`HTTP Error status: ${response.status}`);
        
        
        const result = await response.json();

        // if the API returned a successful response with the nested data or not
        if (result.success && result.data && result.data.data) {
          setMeals(result.data.data)
        } else {
          throw new Error('Data format is invalid or missing')
        }

      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    };
    
    fetchMeals()
  }, [] )

  // ---------------- Loading State ----------------
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
          <p className="text-lg font-bold text-slate-500 tracking-wide animate-pulse">Whipping up recipes...</p>
        </div>
      </div>
    );
  } 

  // ---------------- Error State ----------------
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
        <div className="bg-red-50 text-red-600 px-6 py-8 rounded-2xl border border-red-200 shadow-sm max-w-md w-full text-center">
          <svg className="w-12 h-12 mx-auto text-red-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-xl font-bold mb-2">Failed to load meals</h2>
          <p className="text-sm font-medium">{error}</p>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
      
      {/* Decorative Header Background */}
      <div className="w-full bg-white border-b border-slate-200 pt-16 pb-12 mb-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-xs font-black tracking-widest mb-4 uppercase">
            Culinary Collection
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Global Recipe Book
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Explore {meals.length} hand-picked dishes from around the world. Find your next favorite meal and learn how to cook it.
          </p>
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
      
    </div>
   
  )
}

export default App