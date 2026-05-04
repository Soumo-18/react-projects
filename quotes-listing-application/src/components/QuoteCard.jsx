// import React from 'react';

export default function QuoteCard({ quote }) {
  return (
    <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/80 hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden flex flex-col justify-between">
      
      {/* Decorative large quotation mark */}
      <div className="absolute top-2 left-4 text-slate-800 group-hover:text-amber-500/10 transition-colors duration-500 pointer-events-none">
        <svg className="w-28 h-28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote Content */}
      <div className="relative z-10 mb-8 mt-4">
        <p className="text-xl md:text-2xl text-slate-300 font-serif italic leading-relaxed group-hover:text-white transition-colors duration-300">
          "{quote.content}"
        </p>
      </div>

      {/* Footer: Author & Tags */}
      <div className="relative z-10 mt-auto pt-6 border-t border-slate-800/80">
        <p className="font-bold text-amber-500 tracking-wide text-lg mb-4 drop-shadow-sm">
          — {quote.author}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {quote.tags && quote.tags.length > 0 ? (
            quote.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-slate-950 text-slate-400 border border-slate-700/50 text-[10px] uppercase font-extrabold tracking-widest rounded-full"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="px-3 py-1 bg-slate-950 text-slate-500 border border-slate-800 text-[10px] uppercase font-extrabold tracking-widest rounded-full">
              General
            </span>
          )}
        </div>
      </div>
      
    </div>
  );
}