import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, ChevronDown, X, Home, Building2, Check } from 'lucide-react';

// --- COMPONENT 1: Create Case Sidebar ---
const CreateCaseSidebar = ({ isOpen, onClose }) => {
  // State to track selected case type
  const [selectedType, setSelectedType] = useState('residential'); // 'residential' or 'commercial'
  const [assisted, setAssisted] = useState(false);

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
        <div className="px-8 py-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Create a case</h2>
            <p className="text-sm text-gray-500 mt-1">Select a case type</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 -mr-2 text-gray-400 hover:text-slate-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 px-8 py-4 overflow-y-auto">
          <h3 className="text-sm font-bold text-slate-900 mb-4">Select the type of mortgage case</h3>
          
          <div className="space-y-4">
            {/* OPTION 1: Residential Case */}
            <div 
              onClick={() => setSelectedType('residential')}
              className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all ${
                selectedType === 'residential' 
                  ? 'border-blue-500 bg-blue-50/50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Header Row inside Card */}
              <div className="flex justify-between items-start mb-4">
                {/* Radio Circle */}
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  selectedType === 'residential' ? 'border-black bg-black text-white' : 'border-gray-300'
                }`}>
                  {selectedType === 'residential' && <Check size={14} strokeWidth={4} />}
                </div>

                {/* Assisted Toggle */}
                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                   {/* Custom Toggle Switch */}
                   <div 
                     onClick={() => setAssisted(!assisted)}
                     className={`w-10 h-5 rounded-full flex items-center px-0.5 cursor-pointer transition-colors ${
                       assisted && selectedType === 'residential' ? 'bg-slate-900' : 'bg-gray-300'
                     }`}
                   >
                     <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${
                       assisted && selectedType === 'residential' ? 'translate-x-5' : 'translate-x-0'
                     }`} />
                   </div>
                   <span className="text-xs font-medium text-slate-700">Assisted</span>
                </div>
              </div>

              {/* Icon & Text */}
              <div className="flex flex-col items-center text-center">
                 {/* 3D House Icon Placeholder */}
                 <div className="mb-3 p-3 bg-white rounded-full shadow-sm">
                    <Home size={32} className="text-slate-700" strokeWidth={1.5} />
                 </div>
                 <h4 className="text-base font-bold text-slate-900 mb-2">Residential Case</h4>
                 <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
                   Independent broker sale with fully Packaged case submission to Huspy. Client interaction to be done by broker
                 </p>
              </div>
            </div>

            {/* OPTION 2: Commercial Case */}
            <div 
              onClick={() => setSelectedType('commercial')}
              className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all ${
                selectedType === 'commercial' 
                  ? 'border-blue-500 bg-blue-50/50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  selectedType === 'commercial' ? 'border-black bg-black text-white' : 'border-gray-300'
                }`}>
                  {selectedType === 'commercial' && <Check size={14} strokeWidth={4} />}
                </div>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                   <div className="w-10 h-5 bg-gray-300 rounded-full flex items-center px-0.5 cursor-pointer">
                     <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                   </div>
                   <span className="text-xs font-medium text-slate-700">Assisted</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                 <div className="mb-3 p-3 bg-white rounded-full shadow-sm">
                    <Building2 size={32} className="text-slate-700" strokeWidth={1.5} />
                 </div>
                 <h4 className="text-base font-bold text-slate-900 mb-2">Commercial Case</h4>
                 <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
                   Independent broker sale with fully Packaged case submission to Huspy. Client interaction to be done by broker
                 </p>
              </div>
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
              Continue
           </button>
        </div>

      </div>
    </div>
  );
};


// --- COMPONENT 2: Main Cases Header ---
const CasesHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="mb-6 relative">
      
      {/* Sidebar Component */}
      <CreateCaseSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Top Row */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Cases</span>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Create Case Button - Opens Sidebar */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="bg-[#722ED1] hover:bg-[#5b24a8] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors active:scale-95 transform shadow-sm"
          >
            <Plus size={16} />
            Create Case
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

      {/* Title & Stats Section */}
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Cases</h1>
          <p className="text-gray-500 text-sm">View and manage you bank cases right here</p>
        </div>
        
        {/* Stats Pills */}
        <div className="flex items-center gap-3">
           <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Active cases <span className="text-slate-900 ml-1">0</span></span>
           <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Completed cases <span className="text-slate-900 ml-1">0</span></span>
           <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Cancelled cases <span className="text-slate-900 ml-1">41</span></span>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative w-64 mr-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-[#722ED1] outline-none"
          />
        </div>
        
        <button className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-full text-sm font-medium text-gray-700 transition-colors">Drafts</button>
        <button className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-full text-sm font-medium text-gray-700 transition-colors">Active cases</button>
        <button className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-full text-sm font-medium text-gray-700 transition-colors">Declined</button>
        
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 flex items-center gap-2">
           Status
           <ChevronDown size={14} />
        </button>
      </div>
    </div>
  );
};

export default CasesHeader;