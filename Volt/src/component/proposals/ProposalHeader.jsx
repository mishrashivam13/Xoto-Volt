import React from 'react';
import { Plus, Search } from 'lucide-react';

const ProposalHeader = () => {
  return (
    <div className="mb-6">
      {/* Top Row: Breadcrumbs & Actions */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Proposals</span>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Button 1: Create Proposal */}
          <button className="bg-[rgb(114,46,209)] hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
            <Plus size={16} />
            Create a proposal
          </button>
          
          {/* Button 2: Credits - Now matches the purple background */}
          <button className="bg-[rgb(114,46,209)] hover:bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm transition-colors">
            <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-700 text-[10px] font-bold">C</div>
            Credits
          </button>
        </div>
      </div>

      {/* Title Section */}
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Proposals</h1>
          <p className="text-gray-500 text-sm">Overview of all your cases</p>
        </div>
        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600">
          Total proposals 102
        </div>
      </div>

      {/* Search Bar Only */}
      <div className="max-w-xs relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
    </div>
  );
};

export default ProposalHeader;