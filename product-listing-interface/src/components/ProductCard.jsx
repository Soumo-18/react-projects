import React from 'react';

export default function ProductCard({ product }) {
  // Calculate the discounted price
  const discountedPrice = (product.price - (product.price * (product.discountPercentage / 100))).toFixed(2);

  // Helper function to render star ratings in glowing green
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return (
      <div className="flex items-center text-emerald-400 text-sm drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
        {[...Array(5)].map((_, index) => (
          <svg 
            key={index} 
            className={`w-4 h-4 ${index < fullStars ? 'fill-current' : 'text-slate-700 fill-current drop-shadow-none'}`} 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-slate-400 text-xs ml-2 font-medium drop-shadow-none">{product.rating}</span>
      </div>
    );
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-800 flex flex-col group hover:border-emerald-500/40 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
      
      {/* Image Container with subtle inner glow */}
      <div className="relative h-56 w-full bg-slate-950/50 rounded-xl overflow-hidden mb-4 flex items-center justify-center border border-slate-800/50 group-hover:border-emerald-900/30 transition-colors">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500 p-4 drop-shadow-lg"
        />
        {/* Cyberpunk Discount Badge */}
        <div className="absolute top-3 left-3 bg-emerald-400 text-black border border-emerald-500/30 text-[10px] font-black px-2.5 py-1 rounded-md tracking-widest uppercase shadow-[0_0_10px_rgba(16,185,129,0.2)] backdrop-blur-sm">
          {product.discountPercentage}% OFF
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs font-black text-emerald-500/80 uppercase tracking-widest">
            {product.brand}
          </p>
          <span className="text-[9px] font-bold text-slate-400 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        
        <h2 className="text-lg font-bold text-slate-200 mb-1 leading-tight line-clamp-1 group-hover:text-white transition-colors" title={product.title}>
          {product.title}
        </h2>
        
        <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow group-hover:text-slate-400 transition-colors">
          {product.description}
        </p>

        {renderStars(product.rating)}

        {/* Price & Action Button */}
        <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-2xl font-black text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">${discountedPrice}</span>
            <span className="text-sm text-slate-600 line-through ml-2">${product.price}</span>
          </div>
          <button className="bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white p-2.5 rounded-lg border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}