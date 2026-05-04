import React from 'react';
import { useState, useEffect } from 'react'
import QuoteCard from './components/QuoteCard.jsx'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuotes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/public/quotes");
      
      if (!response.ok) {
        throw new Error(`HTTP Error status: ${response.status}`);
      }
      
      const result = await response.json();

      if (result.success && result.data && result.data.data) {
        setQuotes(result.data.data);
      } else {
        throw new Error('Data format is invalid or missing');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1c] font-sans pb-24 selection:bg-amber-500/30 selection:text-amber-100 relative overflow-hidden">
      
      {/* Ambient Dark Mode Glow Effects */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-900/10 blur-[150px] mix-blend-screen pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/10 blur-[150px] mix-blend-screen pointer-events-none"></div>

      {/* Header Section */}
      <header className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block py-1.5 px-5 rounded-full bg-slate-900/80 border border-slate-700/50 text-amber-500 text-xs font-black tracking-widest mb-6 uppercase shadow-lg">
            Words of Wisdom
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 font-serif text-transparent bg-clip-text bg-gradient-to-br from-amber-100 via-amber-200 to-amber-600 drop-shadow-sm">
            The Quote Gallery
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Explore a curated collection of inspirational, humorous, and thought-provoking quotes powered by FreeAPI.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {loading ? (
          <div className="flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-sm rounded-3xl p-12 border border-slate-800 min-h-[500px]">
            <div className="w-12 h-12 border-4 border-slate-700 border-t-amber-500 rounded-full animate-spin mb-4 shadow-[0_0_15px_rgba(245,158,11,0.3)]"></div>
            <p className="text-lg font-bold text-slate-400 tracking-wide animate-pulse">Gathering wisdom...</p>
          </div>
        ) : error ? (
          <div className="bg-red-950/20 backdrop-blur-md text-red-400 px-6 py-12 rounded-3xl border border-red-900/50 text-center min-h-[400px] flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-2 font-serif text-red-300">Something went wrong</h2>
            <p className="text-lg mb-6 text-red-400/80">{error}</p>
            <button 
              onClick={fetchQuotes}
              className="px-6 py-3 bg-red-900/40 border border-red-800 hover:bg-red-900/60 text-red-200 rounded-xl font-bold transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Grid Layout for Quotes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quotes.map((quote) => (
                <QuoteCard key={quote.id} quote={quote} />
              ))}
            </div>

            {/* Glowing Refresh Button */}
            <div className="mt-20 text-center">
              <button
                onClick={fetchQuotes}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-amber-50 bg-slate-900 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.1)] hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-full opacity-20 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center">
                  <svg className="w-5 h-5 mr-3 text-amber-500 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  Load More Quotes
                </span>
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default App
