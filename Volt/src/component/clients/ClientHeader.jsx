import React, { useState } from 'react';
import { Plus, Search, Calendar, ChevronDown, X } from 'lucide-react';

// --- NEW COMPONENT: Add Client Sidebar Form ---
const AddClientSidebar = ({ isOpen, onClose }) => {
  // Agar open nahi hai to kuch mat dikhao
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end isolate">
      {/* 1. Backdrop Overlay (Click to close) */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300" 
        onClick={onClose}
      />

      {/* 2. Slide-in Sidebar Panel */}
      <div className="relative w-full max-w-[500px] bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 flex items-start justify-between bg-white">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Add new client</h2>
            <p className="text-sm text-gray-500 mt-1">Provide some basic information about your client.</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 -mr-2 text-gray-400 hover:text-slate-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Fields (Scrollable) */}
        <div className="flex-1 p-8 overflow-y-auto space-y-6">
          
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">First name</label>
              <input 
                type="text" 
                placeholder="E.g: John" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-gray-400" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Last name</label>
              <input 
                type="text" 
                placeholder="E.g.: Gómez" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-gray-400" 
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
            <input 
              type="email" 
              placeholder="E.g: john@gmail.com" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-gray-400" 
            />
          </div>

          {/* Phone Number */}
          <div>
             <label className="block text-sm font-medium text-gray-600 mb-2">Phone number</label>
             <div className="flex gap-3">
                {/* Fake Country Dropdown */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-slate-900 min-w-[120px] cursor-pointer hover:bg-gray-100">
                   <span className="text-lg">🇦🇪</span> 
                   <span className="font-bold">+971</span>
                </div>
                <input 
                  type="tel" 
                  placeholder="E.g: 54371921" 
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-gray-400" 
                />
                <button className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-100">
                   <ChevronDown size={18} />
                </button>
             </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-100 flex justify-end bg-white">
           <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg text-sm font-bold transition-colors shadow-xl shadow-slate-900/10 active:transform active:scale-95">
              Add client
           </button>
        </div>

      </div>
    </div>
  );
};


// --- MAIN COMPONENT: Client Header ---
const ClientHeader = () => {
  // State to control Sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="mb-6 relative">
      {/* --- Sidebar Component Render --- */}
      <AddClientSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Top Row: Breadcrumbs & Actions */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Client hub</span>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Add New Button - Ab ye Sidebar open karega */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors active:scale-95 transform"
          >
            <Plus size={16} />
            Add new
          </button>

          <button className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm">
            <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-700 text-[10px] font-bold">C</div>
            Credits
          </button>
        </div>
      </div>

      {/* Title Section */}
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Clients</h1>
          <p className="text-gray-500 text-sm">Manage your clients and their preferences</p>
        </div>
        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600">
          Total client count 15
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium">All time</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">7 days</button>
        </div>

        <button className="ml-auto px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-600 flex items-center gap-2">
          <Calendar size={16} />
          Select range
          <ChevronDown size={14} />
        </button>
      </div>
    </div>
  );
};

export default ClientHeader;