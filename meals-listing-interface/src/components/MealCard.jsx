import React from 'react';

export default function MealCard({ meal }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Meal Image with Category Badge */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {meal.strCategory}
          </span>
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {meal.strArea}
          </span>
        </div>
      </div>

      {/* Meal Details */}
      <div className="p-6 flex flex-col grow">
        <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1" title={meal.strMeal}>
          {meal.strMeal}
        </h2>
        
        {/* Instructions Snippet (Truncated to 3 lines) */}
        <p className="text-sm text-slate-500 mb-6 line-clamp-3 grow">
          {meal.strInstructions}
        </p>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-100 mt-auto">
          {meal.strYoutube ? (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-orange-50 hover:bg-orange-100 text-orange-600 font-semibold py-2.5 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              Watch Recipe
            </a>
          ) : (
            <span className="flex items-center justify-center w-full bg-slate-50 text-slate-400 font-semibold py-2.5 rounded-xl cursor-not-allowed">
              No Video Available
            </span>
          )}
        </div>
      </div>
    </div>
  );
}