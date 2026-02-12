import React, { useState } from 'react';
import { Plus, Search, Calendar, ChevronDown } from 'lucide-react';

const ClientHeader = () => {
  // State to track which filter is active
  const [activeFilter, setActiveFilter] = useState('All time');

  return (
    <div className="mb-6">
      {/* Top Row: Breadcrumbs & Actions */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Client hub</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="bg-[rgb(114,46,209)]  text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
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
          Total client count 44
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
        
        {/* Toggle Logic Applied Here */}
        <div className="flex items-center gap-2">
          
          {/* Button 1: All time */}
          <button 
            onClick={() => setActiveFilter('All time')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'All time' 
                ? 'bg-[rgb(114,46,209)] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All time
          </button>

          {/* Button 2: 7 days */}
          <button 
            onClick={() => setActiveFilter('7 days')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === '7 days' 
                ? 'bg-[rgb(114,46,209)] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            7 days
          </button>
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