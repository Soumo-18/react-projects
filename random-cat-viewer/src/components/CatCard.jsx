import React from 'react';

export default function CatCard({ cat }) {
  // Fallback image in case the API doesn't provide one for a specific breed
  const imageUrl = cat.image || "https://via.placeholder.com/600x400?text=No+Cat+Image+Available";

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-rose-100 overflow-hidden flex flex-col md:flex-row max-w-4xl w-full transition-all duration-300 hover:shadow-2xl">
      
      {/* Left side: Cat Image */}
      <div className="w-full md:w-2/5 h-72 md:h-auto relative overflow-hidden bg-rose-50">
        <img
          src={imageUrl}
          alt={cat.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-rose-600 text-xs font-black px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
          {cat.origin}
        </div>
      </div>

      {/* Right side: Cat Details */}
      <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {cat.name}
          </h2>
          <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            {cat.life_span} Years
          </span>
        </div>

        {/* Temperament Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cat.temperament?.split(', ').map((trait, index) => (
            <span key={index} className="bg-rose-50 text-rose-600 border border-rose-100 text-[11px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
              {trait}
            </span>
          ))}
        </div>

        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
          About the Breed
        </h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          {cat.description || "No description available for this mysterious feline."}
        </p>
        
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mt-auto">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Child Friendly</p>
            <div className="flex gap-1 mt-1">
               {/* Simple visual indicator out of 5 */}
               {[...Array(5)].map((_, i) => (
                 <div key={i} className={`h-2 w-full rounded-full ${i < cat.child_friendly ? 'bg-rose-400' : 'bg-slate-100'}`}></div>
               ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dog Friendly</p>
            <div className="flex gap-1 mt-1">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className={`h-2 w-full rounded-full ${i < cat.dog_friendly ? 'bg-rose-400' : 'bg-slate-100'}`}></div>
               ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}