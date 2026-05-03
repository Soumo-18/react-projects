import React from 'react';

export default function JokeCard({ joke }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-slate-700/50 hover:border-violet-500/50 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(124,58,237,0.15)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      
      {/* Decorative Quote Icon */}
      <div className="absolute -top-6 -left-6 text-slate-700 opacity-30 group-hover:text-violet-500/20 transition-colors duration-500 pointer-events-none">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Joke Content */}
      <div className="relative z-10 mb-8">
        <p className="text-lg md:text-xl font-medium text-slate-200 leading-relaxed group-hover:text-white transition-colors">
          "{joke.content}"
        </p>
      </div>

      {/* Footer: Categories & ID */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-700/50 mt-auto">
        <div className="flex flex-wrap gap-2">
          {joke.categories && joke.categories.length > 0 ? (
            joke.categories.map((category, index) => (
              <span 
                key={index} 
                className="bg-violet-500/10 text-violet-400 border border-violet-500/20 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest"
              >
                {category}
              </span>
            ))
          ) : (
            <span className="bg-slate-800 text-slate-400 border border-slate-700 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
              Uncategorized
            </span>
          )}
        </div>
        <span className="text-xs font-medium text-slate-500 group-hover:text-violet-400 transition-colors">
          #{joke.id}
        </span>
      </div>
      
    </div>
  );
}