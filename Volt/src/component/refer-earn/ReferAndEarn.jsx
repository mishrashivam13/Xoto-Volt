import React from 'react';
import { Plus } from 'lucide-react';

const ReferAndEarn = () => {
  return (
    <div className="w-full">
      {/* Top Header: Breadcrumbs & Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Refer and Earn</span>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Button 1: Refer Lead - Updated to Purple */}
          <button className="bg-[rgb(114,46,209)]  text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
            <Plus size={16} />
            Refer a Real Estate Lead
          </button>
          
          {/* Button 2: Credits - Updated to Purple */}
          <button className="bg-[rgb(114,46,209)]  text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm transition-colors">
            <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-700 text-[10px] font-bold">C</div>
            Credits
          </button>
        </div>
      </div>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Refer and Earn</h1>
      </div>

      {/* Hero Banner */}
      <div className="bg-sky-50 rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Stats */}
        <div className="flex-1">
          <p className="text-slate-600 font-medium mb-1">Earn</p>
          <div className="text-6xl font-bold text-slate-900 mb-2 tracking-tight">30%</div>
          <p className="text-slate-700 font-medium">of the Agent's commission</p>
        </div>

        {/* Right Side: Steps Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm max-w-md w-full">
          <div className="space-y-6">
            <StepItem number="1" text="Send the referral to Xoto" />
            <StepItem number="2" text="Wait for the deal to complete" />
            <StepItem number="3" text="Earn instantly when the commission is received" />
          </div>
        </div>
      </div>

      {/* Referred Leads Section */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-1">Referred leads</h2>
        <p className="text-gray-500 text-sm mb-6">Keep a track of all your earning and referrals sent to Huspy</p>

        {/* Blurred Table Container */}
        <div className="relative border border-gray-100 rounded-xl overflow-hidden bg-white min-h-[300px]">
          
          {/* Background Blurred Content (Fake Table Rows) */}
          <div className="absolute inset-0 p-6 opacity-30 blur-[2px] pointer-events-none select-none overflow-hidden">
             {/* Fake Header */}
             <div className="grid grid-cols-5 gap-4 mb-6 text-xs font-bold text-gray-400 uppercase">
               <div>Name</div>
               <div>Phone number</div>
               <div>Market Type</div>
               <div>City</div>
               <div>Status</div>
             </div>
             {/* Fake Rows */}
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="grid grid-cols-5 gap-4 py-4 border-b border-gray-100 text-sm text-gray-300">
                  <div className="bg-gray-100 h-4 rounded w-24"></div>
                  <div className="bg-gray-100 h-4 rounded w-32"></div>
                  <div className="bg-gray-100 h-4 rounded w-20"></div>
                  <div className="bg-gray-100 h-4 rounded w-16"></div>
                  <div className="bg-gray-100 h-4 rounded w-12"></div>
               </div>
             ))}
          </div>

          {/* Overlay Message */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 bg-white/40">
             <h3 className="text-lg font-bold text-slate-900 mb-2">You'll see your referred leads here soon!</h3>
             <p className="text-gray-500 text-sm max-w-md mx-auto">
               We're working on introducing a table view to help you track your leads and earnings over time. <br/>
               Expect it to be available soon!
             </p>
          </div>

        </div>
      </div>
    </div>
  );
};

// Helper Component for Steps
const StepItem = ({ number, text }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
      {number}
    </div>
    <p className="text-sm font-medium text-slate-700 pt-0.5">{text}</p>
  </div>
);

export default ReferAndEarn;