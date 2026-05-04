import React from 'react';

export default function VideoCard({ video }) {
  const { snippet, statistics, id } = video.items;

  // Reusable number formatter (works for views, likes, and comments)
  const formatNumber = (num) => {
    if (!num) return '0';
    return new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(num);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <a 
      href={`https://www.youtube.com/watch?v=${id}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col bg-zinc-900/80 backdrop-blur-md rounded-xl border border-zinc-800 hover:border-zinc-500 transition-all duration-300 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 relative"
    >
      {/* Thumbnail & Hover Overlay Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
        
        {/* Base Thumbnail */}
        <img
          src={snippet.thumbnails.high?.url || snippet.thumbnails.medium?.url}
          alt={snippet.title}
          className="object-cover w-full h-full group-hover:scale-105 group-hover:blur-[3px] group-hover:opacity-30 transition-all duration-500 ease-out"
        />
        
        {/* --- HOVER STATE OVERLAY --- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 z-10">
          
          <div className="flex gap-6 mb-3">
            {/* Likes */}
            <div className="flex flex-col items-center text-white">
              <svg className="w-6 h-6 mb-1 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
              </svg>
              <span className="text-sm font-bold">{formatNumber(statistics.likeCount)}</span>
            </div>
            
            {/* Comments */}
            <div className="flex flex-col items-center text-white">
              <svg className="w-6 h-6 mb-1 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span className="text-sm font-bold">{formatNumber(statistics.commentCount)}</span>
            </div>
          </div>
          
          {/* Tags (Sliced to max 3 so it doesn't overflow) */}
          {snippet.tags && (
            <div className="flex flex-wrap justify-center gap-1.5 mt-2">
              {snippet.tags.slice(0, 3).map((tag, idx) => (
                <span key={idx} className="bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md font-medium tracking-wide">
                  #{tag}
                </span>
              ))}
              {snippet.tags.length > 3 && (
                <span className="bg-white/5 text-zinc-400 text-[10px] px-2 py-1 rounded-md font-medium">
                  +{snippet.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Mock duration badge (Disappears on hover to make room for stats) */}
        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-zinc-200 text-xs font-medium px-2 py-1 rounded-md border border-zinc-700/50 group-hover:opacity-0 transition-opacity duration-200">
          Play Video
        </div>
      </div>

      {/* Video Info (Bottom Text) */}
      <div className="p-4 flex flex-col flex-grow relative z-20 bg-zinc-900/80">
        <h2 
          className="text-zinc-100 font-semibold text-base leading-tight mb-2 line-clamp-2 group-hover:text-white transition-colors" 
          title={snippet.title}
        >
          {snippet.title}
        </h2>
        
        <div className="mt-auto">
          <p className="text-zinc-400 text-sm font-medium hover:text-zinc-300 transition-colors line-clamp-1">
            {snippet.channelTitle}
          </p>
          <div className="flex items-center text-zinc-500 text-xs mt-1 gap-1.5 font-medium">
            <span>{formatNumber(statistics.viewCount)} views</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>{formatDate(snippet.publishedAt)}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

// import React from 'react';

// export default function VideoCard({ video }) {
//   // Extract the relevant data (FreeAPI wraps the video inside an 'items' object)
//   const { snippet, statistics, id } = video.items;

//   // Format view count (e.g., 17208 -> 17K)
//   const formatViews = (views) => {
//     return new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(views);
//   };

//   // Format date (e.g., "Jul 18, 2023")
//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'short', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <a 
//       href={`https://www.youtube.com/watch?v=${id}`} 
//       target="_blank" 
//       rel="noopener noreferrer"
//       className="group flex flex-col bg-zinc-900/80 backdrop-blur-md rounded-xl border border-zinc-800 hover:border-zinc-500 transition-colors duration-200 overflow-hidden cursor-pointer shadow-lg"
//     >
//       {/* Thumbnail */}
//       <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
//         <img
//           src={snippet.thumbnails.high?.url || snippet.thumbnails.medium?.url}
//           alt={snippet.title}
//           className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
//         />
//         {/* Mock duration badge (Vercel style dark badge) */}
//         <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-zinc-200 text-xs font-medium px-2 py-1 rounded-md border border-zinc-700/50">
//           Play Video
//         </div>
//       </div>

//       {/* Video Info */}
//       <div className="p-4 flex flex-col flex-grow">
//         <h2 
//           className="text-zinc-100 font-semibold text-base leading-tight mb-2 line-clamp-2 group-hover:text-white transition-colors" 
//           title={snippet.title}
//         >
//           {snippet.title}
//         </h2>
        
//         <div className="mt-auto">
//           <p className="text-zinc-400 text-sm font-medium hover:text-zinc-300 transition-colors">
//             {snippet.channelTitle}
//           </p>
//           <div className="flex items-center text-zinc-500 text-xs mt-1 gap-1.5 font-medium">
//             <span>{formatViews(statistics.viewCount)} views</span>
//             <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
//             <span>{formatDate(snippet.publishedAt)}</span>
//           </div>
//         </div>
//       </div>
//     </a>
//   );
// }