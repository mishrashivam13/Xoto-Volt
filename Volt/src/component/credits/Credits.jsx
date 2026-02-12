import React from 'react';

const Credits = () => {
  return (
    <div className="w-full">
      {/* Top Header: Breadcrumbs & Credits Button */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Credits</span>
        </div>
        
        {/* Top Right Credits Button (Non-clickable here simply for visual) */}
        <button className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm">
          <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-700 text-[10px] font-bold">C</div>
          Credits
        </button>
      </div>

      {/* Title & Action Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Credits</h1>
        <button className="bg-gray-50 hover:bg-gray-100 border border-gray-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Learn more about credits
        </button>
      </div>

      {/* Blue Credits Banner */}
      <div className="w-full h-48 bg-[#1e4e64] rounded-2xl p-10 relative overflow-hidden flex flex-col justify-center text-white shadow-md">
         {/* Background Decoration (Glow effect) */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none"></div>
         
         <div className="relative z-10">
            <h2 className="text-sm font-medium text-blue-100 mb-2">Available credits</h2>
            <div className="flex items-center gap-3">
               <span className="text-7xl font-bold tracking-tight">73</span>
               
               {/* Gold Coins Stack Icon (CSS only) */}
               <div className="flex -space-x-3 mt-4">
                  <div className="w-6 h-6 rounded-full bg-yellow-600 border border-[#1e4e64] shadow-sm"></div>
                  <div className="w-6 h-6 rounded-full bg-yellow-500 border border-[#1e4e64] shadow-sm transform -translate-y-1"></div>
                  <div className="w-6 h-6 rounded-full bg-yellow-400 border border-[#1e4e64] shadow-sm transform -translate-y-2 flex items-center justify-center text-[8px] text-yellow-800 font-bold">$</div>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Credits;