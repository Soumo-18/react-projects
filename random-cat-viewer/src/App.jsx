import React from 'react'
import { useState, useEffect } from 'react'
import CatCard from './components/CatCard.jsx'


const App = () => {

  const [cat, setCat] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCat = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/public/cats/cat/random");
      
      if (!response.ok) {
        throw new Error(`HTTP Error status: ${response.status}`);
      }
      
      const result = await response.json();

      // Based on your JSON, the single cat object is inside result.data
      if (result.success && result.data) {
        setCat(result.data);
      } else {
        throw new Error('Data format is invalid or missing');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Run the fetch once when the app loads
  useEffect(() => {
    fetchCat();
  }, []);

  return (
      <div className="min-h-screen bg-[#FFF5F5] font-sans flex flex-col relative overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-rose-200/40 rounded-full blur-3xl -z-10"></div>
      
      {/* Header */}
      <header className="w-full text-center py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Random <span className="text-rose-500">Cat</span> Explorer
        </h1>
        <p className="text-slate-500 font-medium">
          Discover unique cat breeds from the FreeAPI database.
        </p>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 pb-20 w-full">
        
        {loading && (
          <div className="flex flex-col items-center gap-4 py-20">
            <div className="w-12 h-12 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
            <p className="text-lg font-bold text-slate-500 animate-pulse">Summoning a feline...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 px-6 py-8 rounded-2xl border border-red-200 shadow-sm max-w-md w-full text-center">
            <h2 className="text-xl font-bold mb-2">Oops! Something went wrong</h2>
            <p className="text-sm font-medium">{error}</p>
            <button 
              onClick={fetchCat}
              className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-bold transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && cat && (
          <div className="flex flex-col items-center w-full">
            <CatCard cat={cat} />
            
            {/* Generate New Cat Button */}
            <button
              onClick={fetchCat}
              className="mt-10 group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-slate-900 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center gap-2">
                <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Discover Another Cat
              </span>
            </button>
          </div>
        )}
      </main>

    </div>
  )
}

export default App