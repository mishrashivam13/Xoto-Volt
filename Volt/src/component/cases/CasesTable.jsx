import React from 'react';
import { ArrowUpDown, MoreHorizontal, Landmark, Globe, Play, X } from 'lucide-react';

// --- MOCK DATA ---
const casesData = [
  { 
    id: 1, 
    caseName: "asfff dfff", 
    bankIcon: 'landmark', // generic
    status: 'Draft',
    amount: "123,123,214,312,414",
    createdBy: "Muhammad Uzair",
    createdOn: "06/02/2025"
  },
  { 
    id: 2, 
    caseName: "manjeet meghwanshi", 
    bankIcon: 'play', // red triangle style
    status: 'Draft',
    amount: "123,131",
    createdBy: "Muhammad Uzair",
    createdOn: "06/02/2025"
  },
  { 
    id: 3, 
    caseName: "Ritesh Sharma", 
    bankIcon: 'globe', // blue globe
    status: 'Not proceeding',
    amount: "1,029,000",
    createdBy: "Muhammad Uzair",
    createdOn: "14/01/2025"
  },
  { 
    id: 4, 
    caseName: "Muhammad Asif", 
    bankIcon: 'globe',
    status: 'Not proceeding',
    amount: "544,131",
    createdBy: "Muhammad Uzair",
    createdOn: "31/12/2024"
  },
  { 
    id: 5, 
    caseName: "Santhosh Chakravarthy", 
    bankIcon: 'globe',
    status: 'Not proceeding',
    amount: "1,000,000",
    createdBy: "Muhammad Uzair",
    createdOn: "10/12/2024"
  },
];

const CasesTable = () => {
  // Helper to render Status Badge
  const renderStatus = (status) => {
    if (status === 'Draft') {
      return (
        <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">
          Draft
        </span>
      );
    }
    if (status === 'Not proceeding') {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium border border-red-100">
          <X size={10} strokeWidth={3} />
          Not proceeding
        </span>
      );
    }
    return null;
  };

  // Helper to render Bank Icon
  const renderBankIcon = (type) => {
    const baseClass = "w-8 h-8 rounded-full flex items-center justify-center border border-gray-100 bg-white shadow-sm";
    switch(type) {
      case 'globe': return <div className={baseClass}><Globe size={18} className="text-blue-500" fill="currentColor" fillOpacity={0.2} /></div>;
      case 'play': return <div className={baseClass}><Play size={16} className="text-red-600 ml-0.5" fill="currentColor" /></div>;
      default: return <div className={baseClass}><Landmark size={16} className="text-slate-700" /></div>;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-white border-b border-gray-100">
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-1">Case <ArrowUpDown size={12} /></div>
              </th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Banks</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Primary Bank Status</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Primary Loan Amount</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Created by</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Created on</th>
              <th className="py-4 px-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {casesData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors group">
                <td className="py-4 px-6 text-sm font-medium text-slate-900">{row.caseName}</td>
                
                {/* Banks Icon */}
                <td className="py-4 px-6">
                   {renderBankIcon(row.bankIcon)}
                </td>

                {/* Status Badge */}
                <td className="py-4 px-6">
                  {renderStatus(row.status)}
                </td>

                <td className="py-4 px-6 text-sm text-slate-900 font-medium">{row.amount}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{row.createdBy}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{row.createdOn}</td>

                {/* Actions */}
                <td className="py-4 px-4 text-right">
                  {/* Show dots only for active/older items in image, usually shows on hover or always */}
                   <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-400">
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

export default CasesTable;