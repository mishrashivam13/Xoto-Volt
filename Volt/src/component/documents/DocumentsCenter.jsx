import React from 'react';
import { Search, ChevronDown, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



// --- MOCK DATA ---
const banksData = [
  { id: 1, name: "ARAB Bank", docs: 6, color: "bg-blue-50 text-blue-600", initials: "AB" },
  { id: 2, name: "Commercial Bank of Dubai", docs: 27, color: "bg-green-50 text-green-600", initials: "CBD" },
  { id: 3, name: "Dubai Islamic Bank", docs: 9, color: "bg-emerald-50 text-emerald-700", initials: "DIB" },
  { id: 4, name: "ENBD", docs: 13, color: "bg-indigo-50 text-indigo-700", initials: "ENBD" },
  { id: 5, name: "National Bank of Fujairah", docs: 15, color: "bg-slate-100 text-slate-700", initials: "NBF" },
  { id: 6, name: "Alma", docs: 1, color: "bg-teal-50 text-teal-700", initials: "Al" },
];


const DocumentsCenter = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Top Header: Breadcrumbs & Credits */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Documents center</span>
        </div>
        
        <button 
            onClick={() => navigate('/credits')}
            className="bg-[#722ED1] hover:bg-[#5b24a8] text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm transition-colors active:scale-95 transform"
          >
            <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-700 text-[10px] font-bold">C</div>
            Credits
          </button>
      </div>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Documents Center</h1>
        <p className="text-gray-500 text-sm">Download bank application forms and other documents that will help you with your cases</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-sm relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search by bank name" 
          className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm placeholder-gray-400 transition-all"
        />
      </div>

      {/* Banks List */}
      <div className="space-y-3">
        {banksData.map((bank) => (
          <div 
            key={bank.id} 
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm cursor-pointer transition-all group"
          >
            {/* Left Side: Logo & Info */}
            <div className="flex items-center gap-4">
              {/* Mock Logo */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border border-black/5 ${bank.color}`}>
                {bank.initials}
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {bank.name}
                </span>
                <span className="text-xs text-gray-500">
                  {bank.docs} documents
                </span>
              </div>
            </div>

            {/* Right Side: Chevron */}
            <div className="text-gray-400 group-hover:text-gray-600">
              <ChevronDown size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsCenter;