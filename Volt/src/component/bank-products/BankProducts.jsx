import React from 'react';
import { 
  Search, ExternalLink, MessageCircle, 
  TrendingUp, ChevronDown, Building2, 
  Wallet, Percent 
} from 'lucide-react';

// --- MOCK DATA ---
const productsData = [
  {
    id: 1,
    bankLogo: "EI", // Mock for Emirates Islamic
    bankColor: "bg-purple-100 text-purple-700",
    type: "Islamic",
    title: "Islamic · Test Product · UAE Resident · Self employed · Salesforce Integration · Primary/Resale/Handover",
    mortgageType: "Islamic",
    transactionType: "Primary/Resale/Handover",
    interest: "0%",
    interestSub: "3m EIBOR",
    fees: "0.52%",
    followOn: "0%",
    followOnSub: "3m EIBOR"
  },
  {
    id: 2,
    bankLogo: "DIB", // Mock for DIB
    bankColor: "bg-green-100 text-green-700",
    type: "Islamic",
    title: "Islamic · Test Product · UAE Resident · Self employed · Salesforce Integration · Primary/Resale/Handover",
    mortgageType: "Islamic",
    transactionType: "Primary/Resale/Handover",
    interest: "0%",
    interestSub: "3m EIBOR",
    fees: "0.52%",
    followOn: "0%",
    followOnSub: "3m EIBOR"
  },
  {
    id: 3,
    bankLogo: "CBD", // Mock for Conventional bank
    bankColor: "bg-red-100 text-red-700",
    type: "Conventional",
    title: "Conventional · Test Product · UAE Resident · Self employed · Salesforce Integration · Primary/Resale/Handover",
    mortgageType: "Conventional",
    transactionType: "Primary/Resale/Handover",
    interest: "0%",
    interestSub: "3m EIBOR",
    fees: "0.52%",
    followOn: "0%",
    followOnSub: "3m EIBOR"
  }
];

const FilterPill = ({ label }) => (
  <button className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 flex items-center gap-2 hover:bg-gray-50 transition-colors whitespace-nowrap">
    {label}
    <ChevronDown size={14} className="text-gray-400" />
  </button>
);

const BankProducts = () => {
  return (
    <div className="w-full">
      {/* Top Header: Breadcrumbs & Credits */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="font-medium text-slate-900">Bank products</span>
        </div>
        
        <button className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm">
          <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-700 text-[10px] font-bold">C</div>
          Credits
        </button>
      </div>

      {/* Title Section */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Bank Products</h1>
          <p className="text-gray-500 text-sm">Find the most accurate bank rates and products, updated each day</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-slate-900 rounded-lg text-sm font-medium border border-gray-200 transition-colors">
          <TrendingUp size={16} />
          See EIBOR rates
        </button>
      </div>

      {/* AI Chatbot Banner */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8 flex items-center gap-3 text-blue-900">
        <MessageCircle size={20} className="text-green-600 fill-green-100" />
        <span className="font-medium text-sm">
          Questions? Ask anything on bank policies to our <span className="text-blue-600 font-bold cursor-pointer hover:underline">AI chatbot</span>
        </span>
      </div>

      {/* Filters Bar */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-2 no-scrollbar">
        <FilterPill label="Banks" />
        <FilterPill label="Employment status" />
        <FilterPill label="Residency status" />
        <FilterPill label="Mortgage type" />
        <FilterPill label="Transaction type" />
        <FilterPill label="Rate" />
        <FilterPill label="LTV" />
        <FilterPill label="Salary transfer" />
        <FilterPill label="Exclusivity" />
        <FilterPill label="Active" />
      </div>

      {/* Products Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-white border-b border-gray-100">
                <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider w-16">Bank</th>
                <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">Product Info</th>
                <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Mortgage type</th>
                <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Transaction type</th>
                <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Interest</th>
                <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Bank fees</th>
                <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Follow on rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {productsData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors group">
                  {/* Bank Logo */}
                  <td className="py-6 px-6 align-top">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${row.bankColor}`}>
                      {row.bankLogo}
                    </div>
                  </td>

                  {/* Product Info */}
                  <td className="py-6 px-6 align-top">
                    <p className="text-xs text-gray-400 mb-1 leading-relaxed">
                      {row.title.split(' · ').map((part, index) => (
                        <span key={index}>
                          {index > 0 && ' · '}
                          {part}
                        </span>
                      ))}
                    </p>
                  </td>

                  {/* Mortgage Type Badge */}
                  <td className="py-6 px-6 align-top text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${row.mortgageType === 'Islamic' ? 'bg-stone-200 text-stone-700' : 'bg-slate-200 text-slate-700'}`}>
                      {row.mortgageType}
                    </span>
                  </td>

                  {/* Transaction Type Badge */}
                  <td className="py-6 px-6 align-top text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                      {row.transactionType}
                    </span>
                  </td>

                  {/* Interest */}
                  <td className="py-6 px-6 align-top text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-slate-900">{row.interest}</span>
                      <span className="text-[10px] text-gray-400">{row.interestSub}</span>
                    </div>
                  </td>

                  {/* Bank Fees */}
                  <td className="py-6 px-6 align-top text-right">
                    <span className="text-sm font-bold text-slate-900">{row.fees}</span>
                  </td>

                  {/* Follow On Rate */}
                  <td className="py-6 px-6 align-top text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-slate-900">{row.followOn}</span>
                      <span className="text-[10px] text-gray-400">{row.followOnSub}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BankProducts;