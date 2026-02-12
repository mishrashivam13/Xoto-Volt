import React from 'react';
import { Plus, Search, ChevronDown } from 'lucide-react';

const CasesHeader = () => {
  return (
    <div className="mb-6">
      {/* Top Row: Breadcrumbs & Actions */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Cases</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
            <Plus size={16} />
            Create Case
          </button>
          <button className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm">
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
        
        {/* Stats Pills (Right Aligned) */}
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
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
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