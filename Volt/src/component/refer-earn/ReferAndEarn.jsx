import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, X, ChevronDown } from 'lucide-react';

// --- COMPONENT 1: Referral Sidebar ---
const ReferralSidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end isolate">
      {/* 1. Backdrop Overlay */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300" 
        onClick={onClose}
      />

      {/* 2. Sidebar Panel */}
      <div className="relative w-full max-w-[600px] bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-8 py-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Refer and Earn</h2>
          <button 
            onClick={onClose} 
            className="p-2 -mr-2 text-gray-400 hover:text-slate-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Fields Section */}
        <div className="flex-1 p-8 overflow-y-auto space-y-6">
          
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Name</label>
              <input 
                type="text" 
                placeholder="E.g: John Doe" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all placeholder:text-gray-400" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Phone number</label>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 px-3 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-900 min-w-[90px]">
                   <span className="text-lg">🇦🇪</span> 
                   <span className="font-bold">+971</span>
                </div>
                <input 
                  type="tel" 
                  placeholder="E.g: 54371921" 
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all placeholder:text-gray-400" 
                />
                 <button className="p-3 bg-gray-50 border border-gray-100 rounded-lg text-gray-400 hover:bg-gray-100">
                   <ChevronDown size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: City & Market Type */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">City</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-900 appearance-none focus:ring-2 focus:ring-slate-900 outline-none cursor-pointer">
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Market type</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-900 appearance-none focus:ring-2 focus:ring-slate-900 outline-none cursor-pointer">
                  <option>Primary</option>
                  <option>Secondary</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
          </div>

          {/* Row 3: Budget & Community */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Budget</label>
              <input 
                type="text" 
                placeholder="E.g.: 1M" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all placeholder:text-gray-400" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Community</label>
              <input 
                type="text" 
                placeholder="E.g.: Marina" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all placeholder:text-gray-400" 
              />
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-white">
           <button 
             onClick={onClose}
             className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-slate-700 rounded-lg text-sm font-medium transition-colors"
           >
              Discard
           </button>
           <button className="px-6 py-2.5 bg-[#111827] hover:bg-slate-800 text-white rounded-lg text-sm font-bold transition-colors shadow-lg shadow-slate-900/10">
              Send referral
           </button>
        </div>

      </div>
    </div>
  );
};


// --- COMPONENT 2: Main Page ---
const ReferAndEarn = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full relative">
      
      {/* Sidebar Component */}
      <ReferralSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Top Header: Breadcrumbs & Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Refer and Earn</span>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Refer Button - Opens Sidebar */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="bg-[#722ED1] hover:bg-[#5b24a8] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors active:scale-95 transform shadow-sm"
          >
            <Plus size={16} />
            Refer a Real Estate Lead
          </button>

          {/* Credits Button - Navigates to Credits */}
          <button 
            onClick={() => navigate('/credits')}
            className="bg-[#722ED1] hover:bg-[#5b24a8] text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm transition-colors active:scale-95 transform"
          >
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