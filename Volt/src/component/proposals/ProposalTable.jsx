import React from 'react';
import { ArrowUpDown, MoreHorizontal, Globe, CircleDollarSign, Building2 } from 'lucide-react';

// --- MOCK DATA ---
const proposalsData = [
  { 
    id: 1, 
    client: "M Proposal", 
    modified: "26/03/2025", 
    propertyVal: "2,600,000", 
    loanAmt: "2,080,000",
    products: [
      { type: 'active', rate: '4.24%', label: 'fixed', color: 'text-blue-500' },
      { type: 'active', rate: '4.59%', label: 'fixed', color: 'text-teal-600' },
      { type: 'empty', label: 'Bank 3' }
    ]
  },
  { 
    id: 2, 
    client: "M Proposal", 
    modified: "10/03/2025", 
    propertyVal: "1,000,000", 
    loanAmt: "800,000",
    products: [
      { type: 'active', rate: '4.49%', label: 'fixed', color: 'text-lime-500' },
      { type: 'active', rate: '4.1%', label: 'fixed', color: 'text-emerald-700' },
      { type: 'active', rate: '4.7%', label: 'fixed', color: 'text-green-600' }
    ]
  },
  { 
    id: 3, 
    client: "M Proposal", 
    modified: "08/03/2025", 
    propertyVal: "1,685,000", 
    loanAmt: "1,348,000",
    products: [
      { type: 'active', rate: '4.49%', label: 'fixed', color: 'text-lime-500' },
      { type: 'empty', label: 'Bank 2' },
      { type: 'empty', label: 'Bank 3' }
    ]
  },
  { 
    id: 4, 
    client: "M Proposal (Copy) (Copy)", 
    modified: "03/03/2025", 
    propertyVal: "1,000,000", 
    loanAmt: "500,000",
    products: [
      { type: 'active', rate: '4.49%', label: 'fixed', color: 'text-lime-500' },
      { type: 'active', rate: '4.1%', label: 'fixed', color: 'text-emerald-700' },
      { type: 'active', rate: '4.24%', label: 'fixed', color: 'text-orange-600', isFab: true } // Mocking FAB bank
    ]
  },
  { 
    id: 5, 
    client: "M Proposal (Copy)", 
    modified: "01/03/2025", 
    propertyVal: "1,600,000", 
    loanAmt: "1,200,000",
    products: [
      { type: 'active', rate: '4.49%', label: 'fixed', color: 'text-lime-500' },
      { type: 'active', rate: '4.1%', label: 'fixed', color: 'text-emerald-700' },
      { type: 'active', rate: '4.24%', label: 'fixed', color: 'text-orange-600', isFab: true }
    ]
  },
];

const ProposalTable = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-white border-b border-gray-100">
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-1">Client Name <ArrowUpDown size={12} /></div>
              </th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Modified on</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50">
                 <div className="flex items-center gap-1">Property value <ArrowUpDown size={12} /></div>
              </th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50">
                 <div className="flex items-center gap-1">Loan amount <ArrowUpDown size={12} /></div>
              </th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
              <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {proposalsData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors group">
                <td className="py-4 px-6 text-sm font-medium text-slate-900">{row.client}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{row.modified}</td>
                <td className="py-4 px-6 text-sm text-slate-900 font-medium">{row.propertyVal}</td>
                <td className="py-4 px-6 text-sm text-slate-900 font-medium">{row.loanAmt}</td>
                
                {/* Products Column */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    {row.products.map((prod, idx) => (
                      prod.type === 'active' ? (
                        <div key={idx} className="flex items-center gap-2">
                          {/* Mock Bank Icon */}
                          {prod.isFab ? (
                             <div className="font-bold text-xs text-red-600 italic">FAB</div> 
                          ) : (
                             <Globe size={20} className={prod.color} fill="currentColor" fillOpacity={0.2} />
                          )}
                          <div className="flex flex-col leading-none">
                            <span className="text-sm font-bold text-slate-800">{prod.rate}</span>
                            <span className="text-[10px] text-gray-500">{prod.label}</span>
                          </div>
                        </div>
                      ) : (
                        // Empty Slot
                        <div key={idx} className="border border-dashed border-gray-300 rounded-full px-3 py-1 text-xs text-gray-400 min-w-[60px] text-center">
                          {prod.label}
                        </div>
                      )
                    ))}
                  </div>
                </td>

                {/* Actions Dots */}
                <td className="py-4 px-4 text-right">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500">
                    <MoreHorizontal size={18} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProposalTable;