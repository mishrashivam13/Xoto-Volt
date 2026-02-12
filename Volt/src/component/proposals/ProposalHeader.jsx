import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, X, ChevronDown, UserPlus, Users } from 'lucide-react';

// --- COMPONENT 1: Create Proposal Sidebar ---
const CreateProposalSidebar = ({ isOpen, onClose }) => {
  // Tab State: 'create' (New) or 'existing' (Existing Client)
  const [activeTab, setActiveTab] = useState('create');

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
          <h2 className="text-2xl font-bold text-slate-900">Create a proposal</h2>
          <button 
            onClick={onClose} 
            className="p-2 -mr-2 text-gray-400 hover:text-slate-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs Section */}
        <div className="px-8 border-b border-gray-100 flex gap-8">
          <button 
            onClick={() => setActiveTab('create')}
            className={`flex items-center gap-2 pb-3 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'create' 
                ? 'border-slate-900 text-slate-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <UserPlus size={16} />
            Create a proposal
          </button>
          <button 
            onClick={() => setActiveTab('existing')}
            className={`flex items-center gap-2 pb-3 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'existing' 
                ? 'border-slate-900 text-slate-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Users size={16} />
            Existing Client
          </button>
        </div>

        {/* Form Fields Section */}
        <div className="flex-1 p-8 overflow-y-auto space-y-6">
          
          {/* Dynamic Content Based on Tab */}
          {activeTab === 'create' ? (
            // --- TAB 1: NEW CLIENT FIELDS ---
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">First name</label>
                <input 
                  type="text" 
                  placeholder="First name" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all placeholder:text-gray-400" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Last name</label>
                <input 
                  type="text" 
                  placeholder="Last name" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all placeholder:text-gray-400" 
                />
              </div>
            </div>
          ) : (
            // --- TAB 2: EXISTING CLIENT FIELD ---
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Select a client</label>
              <input 
                type="text" 
                placeholder="Select a client" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all placeholder:text-gray-400" 
              />
            </div>
          )}

          {/* --- COMMON FIELDS (Always Visible) --- */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Residency status</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-500 appearance-none focus:ring-2 focus:ring-slate-900 outline-none cursor-pointer">
                  <option>Residency status</option>
                  <option>UAE Resident</option>
                  <option>Non-Resident</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Employment status</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-500 appearance-none focus:ring-2 focus:ring-slate-900 outline-none cursor-pointer">
                  <option>Employment status</option>
                  <option>Salaried</option>
                  <option>Self-Employed</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
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
              Create a proposal
           </button>
        </div>

      </div>
    </div>
  );
};


// --- COMPONENT 2: Main Proposal Header ---
const ProposalHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="mb-6 relative">
      
      {/* Sidebar Component */}
      <CreateProposalSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Top Row */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Proposals</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="bg-[#722ED1] hover:bg-[#5b24a8] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors active:scale-95 transform shadow-sm"
          >
            <Plus size={16} />
            Create a proposal
          </button>
          
          <button 
            onClick={() => navigate('/credits')}
            className="bg-[#722ED1] hover:bg-[#5b24a8] text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm transition-colors active:scale-95 transform"
          >
            <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-700 text-[10px] font-bold">C</div>
            Credits
          </button>
        </div>
      </div>

      {/* Title & Stats */}
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Proposals</h1>
          <p className="text-gray-500 text-sm">Overview of all your cases</p>
        </div>
        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600">
          Total proposals 102
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-xs relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-[#722ED1] outline-none"
        />
      </div>
    </div>
  );
};

export default ProposalHeader;