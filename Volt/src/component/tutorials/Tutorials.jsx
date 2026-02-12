import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { Play, Volume2, Maximize, MoreVertical, Settings } from 'lucide-react';

const Tutorials = () => {
  const navigate = useNavigate(); // 2. Initialize hook

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Tutorials</span>
        </div>
        
        {/* 3. Updated Button with onClick */}
        <button 
          onClick={() => navigate('/credits')} // Navigate to /credits
          className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors active:scale-95 transform"
        >
          <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-700 text-[10px] font-bold">C</div>
          Credits
        </button>
      </div>

      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Tutorials</h1>
        <p className="text-gray-500 text-sm">Welcome to the new Broker Portal. Watch these quick videos to get up and running with our new user experience.</p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Video 1: Dashboard Walkthrough */}
        <VideoCard 
          title="Welcome to the New Huspy Portal"
          description="A walkover of our new and improved portal"
          duration="2:51"
          thumbnail={
            <div className="w-full h-full bg-slate-50 p-4 flex gap-2 overflow-hidden">
               <div className="w-16 h-full bg-white rounded-lg shadow-sm"></div>
               <div className="flex-1 flex flex-col gap-2">
                 <div className="h-8 bg-white rounded-lg shadow-sm w-full"></div>
                 <div className="flex gap-2 h-full">
                    <div className="flex-1 bg-slate-800 rounded-lg shadow-sm text-white/20 p-2 text-xs">Total Payouts</div>
                    <div className="flex-1 bg-white rounded-lg shadow-sm"></div>
                 </div>
               </div>
            </div>
          }
        />

        {/* Video 2: Credits */}
        <VideoCard 
          title="All about Credits"
          description="Learn how to use and earn credits to make the most out of your cases!"
          duration="1:12"
          thumbnail={
            <div className="w-full h-full bg-black flex flex-col items-center justify-center">
               <div className="text-4xl font-serif italic text-white tracking-wide">
                 earn <span className="not-italic font-sans">credits</span>
               </div>
               <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 top-1/2 left-1/3 opacity-80 blur-[1px]"></div>
               <div className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-700 bottom-1/3 right-1/3 opacity-80"></div>
            </div>
          }
        />

        {/* Video 3: Create Proposal */}
        <VideoCard 
          title="Create a proposal"
          description="Review your proposal. Take a look at the proposal created from your preferences."
          duration="3:10"
          thumbnail={
             <div className="w-full h-full bg-white border border-gray-100 p-6 flex flex-col items-center justify-center text-gray-300">
                <div className="w-3/4 h-4 bg-gray-100 rounded mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-100 rounded"></div>
             </div>
          }
        />

      </div>
    </div>
  );
};

// Reusable Video Player Card Component (No changes here, kept for completeness)
const VideoCard = ({ title, description, duration, thumbnail }) => {
  return (
    <div className="flex flex-col gap-3 group">
      <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="absolute inset-0 z-0 opacity-90 group-hover:scale-105 transition-transform duration-700">
          {thumbnail}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex flex-col gap-2">
           <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-white rounded-full"></div>
           </div>
           <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                 <button className="hover:text-gray-200"><Play size={20} fill="currentColor" /></button>
                 <span className="text-xs font-medium">0:00 / {duration}</span>
              </div>
              <div className="flex items-center gap-3">
                 <button className="hover:text-gray-200"><Volume2 size={18} /></button>
                 <button className="hover:text-gray-200"><Settings size={18} /></button>
                 <button className="hover:text-gray-200"><Maximize size={18} /></button>
                 <button className="hover:text-gray-200"><MoreVertical size={18} /></button>
              </div>
           </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
           <div className="w-14 h-14 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
              <Play size={24} fill="white" className="text-white ml-1" />
           </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900 leading-tight">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default Tutorials;