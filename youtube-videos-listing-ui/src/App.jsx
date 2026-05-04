import React from 'react'
import { useState, useEffect } from 'react'
import VideoCard from './components/VideoCard.jsx'

const App = () => {
  const [videos,setVideos]= useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchVideos = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://api.freeapi.app/api/v1/public/youtube/videos')
      if(!response.ok) throw new Error(`HTTP Error status: ${response.status}`);

      const result = await response.json()

      if(result.success && result.data && result.data.data) {
        setVideos(result.data.data)
      } else {
        throw new Error(`Data Fromat is Invalid or Missing`)
      }
    } catch (error) {
      setError(error.message)
    } finally{
      setLoading(false)
    }
  }

  useEffect( () => {
    fetchVideos()
  }, [] )

  return (
   <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white relative">
      
      {/* Tldraw-style Dot Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(#333_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

      {/* Navigation (Vercel Style) */}
      <nav className="relative z-10 border-b border-zinc-800/80 bg-black/50 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white fill-current">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
            <span className="text-xl font-bold tracking-tight">☕Chai Aur Code☕</span>
          </div>
          <button 
            onClick={fetchVideos}
            className="text-sm font-medium text-zinc-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-zinc-900 transition-all border border-transparent hover:border-zinc-800"
          >
            Refresh Feed
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="relative z-10 pt-15 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
            Discover content.
          </h1>
          <p className="text-lg text-zinc-400 font-medium leading-relaxed">
            A minimalist, high-performance video browsing interface powered by FreeAPI. Designed with focus and clarity.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm rounded-2xl">
            <div className="w-8 h-8 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-4"></div>
            <p className="text-sm font-medium text-zinc-400">Loading videos...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] border border-red-900/30 bg-red-950/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Failed to load feed</h2>
            <p className="text-zinc-400 mb-6 max-w-md">{error}</p>
            <button 
              onClick={fetchVideos}
              className="px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-zinc-200 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.items.id} video={video} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App