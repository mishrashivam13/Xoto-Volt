import React from 'react';
import { 
  Search, ExternalLink, MoreHorizontal, 
  FileText, Banknote, Image as ImageIcon,
  Building2
} from 'lucide-react';

const BankUpdates = () => {
  return (
    <div className="w-full">
      {/* Top Header: Breadcrumbs & Credits */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Bank updates</span>
        </div>
        
        <button className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm">
          <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-700 text-[10px] font-bold">C</div>
          Credits
        </button>
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto">
        
        {/* Page Title & Coda Actions */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-gray-500">
             <FileText size={18} />
             <span className="text-gray-400">Bank updates / </span>
             <span className="text-gray-600">Jul 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 border border-red-200 text-red-600 rounded text-sm font-medium hover:bg-red-50 transition-colors">
              <ExternalLink size={14} />
              Open in Coda
            </button>
            <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-600 mb-10 flex items-center px-12">
            {/* Background Decor (Shapes) */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 bg-white transform -skew-x-12 translate-x-20"></div>
            
            <div className="relative z-10 text-white">
              <h1 className="text-5xl font-bold mb-4">Bank updates</h1>
              <p className="text-lg opacity-90 max-w-md font-light">
                Your source for the latest bank updates across the UAE.
              </p>
            </div>

            {/* Floating Rate Card Mockup (Right Side) */}
            <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-xl hidden md:block">
               <div className="flex items-center gap-4 text-white mb-2">
                  <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600"><Building2 size={20}/></div>
                  <div className="text-xs">
                     <div className="opacity-70">Interest rate</div>
                     <div className="font-bold text-lg">2.55%</div>
                  </div>
               </div>
               <div className="space-y-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="h-2 bg-white/20 rounded w-32"></div>
                 ))}
               </div>
            </div>
        </div>

        {/* Month Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl">💰</div> {/* Using Emoji for Money Bag as closest match */}
          <h2 className="text-3xl font-bold text-slate-900">Jul 2025</h2>
        </div>

        {/* Input Placeholder */}
        <div className="flex items-center gap-3 mb-10 text-gray-400 group cursor-text">
          <div className="w-5 h-5 flex items-center justify-center border border-gray-300 rounded text-xs">+</div>
          <span className="text-sm group-hover:text-gray-600">Start typing or insert using /</span>
        </div>

        {/* Updates List Section */}
        <div className="mb-4">
          <div className="flex justify-between items-end mb-4 border-b border-gray-100 pb-2">
            <h3 className="text-lg font-bold text-slate-800">Bank rates update - Jul'25</h3>
            <button className="text-gray-400 hover:text-gray-600"><Search size={18} /></button>
          </div>

          {/* Table Headers */}
          <div className="grid grid-cols-12 gap-4 text-xs font-medium text-gray-400 mb-4 px-2">
            <div className="col-span-2">Date</div>
            <div className="col-span-2 flex items-center gap-1"><FileText size={12}/> Bank</div>
            <div className="col-span-1">Type</div>
            <div className="col-span-5">Description</div>
            <div className="col-span-2">Details</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-12 gap-4 items-start px-2 py-2 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="col-span-2 text-sm text-gray-600">7/25/2025</div>
              <div className="col-span-2">
                 {/* DIB Logo Mock */}
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-green-700 font-bold text-xs border border-green-200">DIB</div>
                    <span className="text-sm font-medium text-slate-700">DIB</span>
                 </div>
              </div>
              <div className="col-span-1">
                <span className="text-green-600 font-medium text-sm">Policy</span>
              </div>
              <div className="col-span-5 text-sm text-slate-800 leading-relaxed">
                <span className="font-bold">DIB</span> has introduced a new policy for considering retirement age at 70 years. <br/>
                Effective <span className="font-bold underline decoration-slate-300 underline-offset-2">July 25, 2025</span>.
              </div>
              <div className="col-span-2">
                <div className="w-full h-24 bg-gray-50 border border-gray-200 rounded flex flex-col items-center justify-center text-gray-400 hover:border-gray-300 cursor-pointer">
                  <FileText size={24} className="mb-2 opacity-50"/>
                  <span className="text-[10px]">Policy.pdf</span>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-12 gap-4 items-start px-2 py-2 hover:bg-gray-50 rounded-lg transition-colors border-t border-gray-100 pt-6">
              <div className="col-span-2 text-sm text-gray-600">7/25/2025</div>
              <div className="col-span-2">
                 {/* ENBD Logo Mock */}
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-800 font-bold text-xs border border-blue-200">ENBD</div>
                    <span className="text-sm font-medium text-slate-700">ENBD</span>
                 </div>
              </div>
              <div className="col-span-1">
                <span className="text-green-600 font-medium text-sm">Policy</span>
              </div>
              <div className="col-span-5 text-sm text-slate-800 leading-relaxed">
                <span className="font-bold">ENBD</span> has enhanced its Mortgage and Loan Against Property Policy effective <span className="font-bold underline decoration-slate-300 underline-offset-2">July 25, 2025</span>.
              </div>
              <div className="col-span-2">
                <div className="w-full h-24 bg-gray-50 border border-gray-200 rounded flex flex-col items-center justify-center text-gray-400 hover:border-gray-300 cursor-pointer">
                   <ImageIcon size={24} className="mb-2 opacity-50"/>
                   <span className="text-[10px]">Preview.jpg</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BankUpdates;