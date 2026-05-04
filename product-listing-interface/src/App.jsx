import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './components/ProductCard.jsx'

const App = () => {
const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/public/randomproducts");
      
      if (!response.ok) {
        throw new Error(`HTTP Error status: ${response.status}`);
      }
      
      const result = await response.json();

      // Ensure the data structure matches the API response format
      if (result.success && result.data && result.data.data) {
        setProducts(result.data.data);
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
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#060e14] font-sans pb-24 selection:bg-emerald-500/30 selection:text-emerald-100 relative overflow-hidden">
      
      {/* Ambient Dark Mode Glow Effects (Cyber Green) */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-900/10 blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-green-900/10 blur-[150px] mix-blend-screen pointer-events-none"></div>

      {/* Cyber Navigation */}
      <nav className="bg-[#0a121a]/80 backdrop-blur-lg border-b border-slate-800/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl flex items-center justify-center text-slate-900 font-black text-xl shadow-[0_0_15px_rgba(52,211,153,0.3)]">
              C
            </div>
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 tracking-tight">
              Cyber<span className="text-emerald-400">Store</span>
            </span>
          </div>
          <button 
            onClick={fetchProducts}
            className="text-sm font-bold text-slate-400 hover:text-emerald-400 flex items-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <span className="hidden sm:block">Refresh Stock</span>
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative z-10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-slate-100">
            Next-Gen <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">Hardware</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Browse our dynamically generated collection of top-tier smartphones and laptops from the FreeAPI database.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {loading ? (
          <div className="flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-sm rounded-3xl p-12 border border-slate-800 min-h-[400px]">
            <div className="w-12 h-12 border-4 border-slate-800 border-t-emerald-500 rounded-full animate-spin mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>
            <p className="text-lg font-bold text-emerald-500/70 tracking-wide animate-pulse">Accessing inventory...</p>
          </div>
        ) : error ? (
          <div className="bg-red-950/20 backdrop-blur-md text-red-400 px-6 py-12 rounded-3xl border border-red-900/50 text-center min-h-[400px] flex flex-col justify-center items-center">
            <svg className="w-12 h-12 mb-4 text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <h2 className="text-2xl font-bold mb-2 text-red-300">Connection Terminated</h2>
            <p className="text-lg mb-6 text-red-400/80">{error}</p>
            <button 
              onClick={fetchProducts}
              className="px-6 py-3 bg-red-900/40 border border-red-800 hover:bg-red-900/60 text-red-200 rounded-xl font-bold transition-colors shadow-lg"
            >
              Re-establish Connection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App