import React from 'react'
import { useState,useEffect } from 'react'
import UserCard from './components/UserCard.jsx'

const App = () => {
  const [users,setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect( () => {

    const fetchData = async () => {
        try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/randomusers")  
       
        if(!response.ok) throw new Error (`HTTP Error status:${response.status}`);
       
        const result = await response.json()

        if(result.success && result.data && result.data.data) {
          setUsers(result.data.data)
        } else {
          throw new Error('Data Format Changed or is Invalid')
        }


      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
   }

   fetchData()
    
  }, [] )

 if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xl font-semibold text-gray-600">Loading users...</p>
        </div>
      </div>
    );
  } 

if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="bg-red-50 text-red-600 px-6 py-4 rounded-lg border border-red-200 shadow-sm max-w-md w-full text-center">
          <h2 className="text-lg font-bold mb-2">Failed to load data</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }


return (
    // 4. Added relative positioning and slate background
    <div className="min-h-screen bg-slate-50 font-sans pb-16 relative overflow-hidden">
      
      {/* Decorative Background Blob effect */}
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-indigo-100 via-purple-50/50 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        <header className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white shadow-sm border border-slate-200 text-indigo-600 text-xs font-black tracking-widest mb-6 uppercase">
            FreeAPI Integration
          </span>
          
          {/* Gradient Text for Header */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 tracking-tight mb-4 pb-2">
            User Directory
          </h1>
          
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Discover {users.length} randomly generated profiles wrapped in a beautiful, modern React user interface.
          </p>
        </header>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {users.map((user) => (
            <UserCard key={user.login.uuid || user.id} user={user} />
          ))}
        </div>
        
      </div>
    </div>
  );
}


export default App