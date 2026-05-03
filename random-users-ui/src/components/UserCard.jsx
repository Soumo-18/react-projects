import React from 'react';

export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
      
      {/* 1. Gradient Cover Photo */}
      <div className="h-28 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 w-full opacity-90 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="px-6 pb-6 flex flex-col items-center relative">
        
        {/* 2. Overlapping Profile Picture */}
        <img
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg -mt-12 mb-3 object-cover group-hover:scale-105 transition-transform duration-300"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        
        {/* Name and Pill Badge */}
        <h2 className="text-xl font-extrabold text-slate-900 text-center tracking-tight">
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <p className="text-xs font-bold text-indigo-600 mt-2 mb-5 bg-indigo-50 px-4 py-1.5 rounded-full uppercase tracking-wider">
          @{user.login.username}
        </p>
        
        {/* 3. Modern Data Blocks */}
        <div className="w-full space-y-3">
          
          {/* Email Block */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 transition-colors group-hover:bg-indigo-50/30">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
            <p className="text-sm text-slate-700 font-medium truncate" title={user.email}>
              {user.email}
            </p>
          </div>
          
          {/* Location & Demographics Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 transition-colors group-hover:bg-purple-50/30">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
              <p className="text-sm text-slate-700 font-medium truncate" title={`${user.location.city}, ${user.location.country}`}>
                {user.location.country}
              </p>
            </div>
            
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 transition-colors group-hover:bg-pink-50/30">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Age / Sex</p>
              <p className="text-sm text-slate-700 font-medium capitalize">
                {user.dob.age} • {user.gender === 'male' ? 'M' : 'F'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}