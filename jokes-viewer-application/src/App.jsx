import React from 'react'
import { useState, useEffect } from 'react'
import JokeCard from './components/JokeCard.jsx'

const App = () => {

  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  const fetchJokes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes")
      
      if (!response.ok) {
        throw new Error(`HTTP Error status: ${response.status}`)
      }
      
      const result = await response.json();

      // Based on the JSON, the array is nested inside result.data.data
      if (result.success && result.data && result.data.data) {
        setJokes(result.data.data);
      } else {
        throw new Error('Data format is invalid or missing');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Run once on initial mount
  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    
    <div className="min-h-screen bg-[#0f172a] font-sans pb-24 selection:bg-violet-500/30 selection:text-violet-200 relative overflow-hidden">
      
      {/* Ambient Glowing Orbs Background */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/20 blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-fuchsia-600/20 blur-[120px] mix-blend-screen pointer-events-none"></div>

      {/* Premium Header */}
      <header className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-violet-300 uppercase bg-violet-500/10 border border-violet-500/20 rounded-full">
          Comedy Vault
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-linear-to-br from-white via-slate-200 to-slate-500">
          Daily Laughs
        </h1>
        <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto">
          Scroll through a hand-picked collection of random jokes. Powered by FreeAPI.
        </p>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {loading ? (
          <div className="flex flex-col items-center justify-center bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/50 min-h-98">
            <div className="w-12 h-12 border-4 border-slate-700 border-t-violet-500 rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-bold text-slate-400 tracking-wide animate-pulse">Summoning comedy...</p>
          </div>
        ) : error ? (
          <div className="bg-rose-950/30 text-rose-400 px-6 py-12 rounded-3xl border border-rose-900/50 backdrop-blur-sm text-center min-h-98 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-2">Tough Crowd!</h2>
            <p className="text-lg mb-6">{error}</p>
            <button 
              onClick={fetchJokes}
              className="px-6 py-3 bg-rose-600/20 border border-rose-600/50 hover:bg-rose-600/40 text-rose-300 rounded-xl font-bold transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Masonry/Grid Layout for Jokes */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {jokes.map((joke) => (
                <JokeCard key={joke.id} joke={joke} />
              ))}
            </div>

            {/* Glowing Refresh Button */}
            <div className="mt-20 text-center">
              <button
                onClick={fetchJokes}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-slate-800 rounded-full hover:bg-slate-700 border border-slate-700 hover:border-violet-500 shadow-[0_0_20px_rgba(124,58,237,0.1)] hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:-translate-y-1"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-full opacity-30 bg-linear-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center">
                  <svg className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-500 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  Load More Jokes
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