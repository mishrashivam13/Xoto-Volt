import React, { useState } from 'react';
import { ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';

// --- MOCK DATA (15 Items) ---
const clientsData = [
  { id: 1, name: "Rekha Yadav", phone: "+971561191967", email: "kanishkayadav1982@gmail.com", created: "24/12/2025", updated: "24/12/2025" },
  { id: 2, name: "Ritesh Sharma", phone: "+971544773817", email: "rits1991@gmail.com", created: "14/01/2025", updated: "22/03/2025" },
  { id: 3, name: "Haj Mohamad Nour Eddin", phone: "+971507813111", email: "nooraldeen79@yahoo.com", created: "08/11/2024", updated: "10/03/2025" },
  { id: 4, name: "Santhosh Chakravarthy", phone: "+971529118993", email: "san23.chak@gmail.com", created: "10/12/2024", updated: "19/02/2025" },
  { id: 5, name: "Priya Malhotra", phone: "+971508821934", email: "priya.m@gmail.com", created: "01/03/2025", updated: "05/03/2025" },
  { id: 6, name: "Rahul Deshmukh", phone: "+971558123456", email: "rahul.desh@yahoo.com", created: "15/02/2025", updated: "28/02/2025" },
  { id: 7, name: "Sarah Jenkins", phone: "+971521239876", email: "sarah.j@hotmail.com", created: "10/01/2025", updated: "12/03/2025" },
  { id: 8, name: "Mohammed Ali", phone: "+971509988776", email: "m.ali@gmail.com", created: "20/12/2024", updated: "22/02/2025" },
  { id: 9, name: "Vikram Singh", phone: "+971567765432", email: "vikram.singh@outlook.com", created: "05/11/2024", updated: "15/01/2025" },
  { id: 10, name: "Anita Roy", phone: "+971543322111", email: "anita.roy@gmail.com", created: "30/01/2025", updated: "10/02/2025" },
  { id: 11, name: "John Doe", phone: "+971551122334", email: "john.doe@company.com", created: "12/12/2024", updated: "14/01/2025" },
  { id: 12, name: "Fatima Khan", phone: "+971529988112", email: "fatima.k@yahoo.com", created: "18/02/2025", updated: "20/03/2025" },
  { id: 13, name: "Arjun Rampal", phone: "+971507766554", email: "arjun.r@gmail.com", created: "22/11/2024", updated: "01/01/2025" },
  { id: 14, name: "Emily Clark", phone: "+971564433221", email: "emily.clark@tech.com", created: "05/03/2025", updated: "25/03/2025" },
  { id: 15, name: "Omar Farooq", phone: "+971542233445", email: "omar.f@business.ae", created: "14/02/2025", updated: "28/02/2025" },
];

const ClientTable = () => {
  // --- PAGINATION STATES ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // UPDATED: Ab 10 items ke baad pagination aayega

  // --- LOGIC ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clientsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(clientsData.length / itemsPerPage);

  // --- HANDLERS ---
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-6 flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-white border-b border-gray-100">
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-1">Name <ArrowUpDown size={12} /></div>
              </th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Phone number</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Created on</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center gap-1">Last updated <ArrowUpDown size={12} /></div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentItems.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50 transition-colors group">
                <td className="py-4 px-6 text-sm font-medium text-slate-900">{client.name}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{client.phone}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{client.email}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{client.created}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{client.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- PAGINATION FOOTER --- */}
      {/* Show pagination only if items > itemsPerPage (Optional logic, currently always showing to demo) */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/50">
        <span className="text-sm text-gray-500">
          Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to <span className="font-medium">{Math.min(indexOfLastItem, clientsData.length)}</span> of <span className="font-medium">{clientsData.length}</span> results
        </span>

        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <button 
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg border border-gray-200 transition-colors ${
              currentPage === 1 
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-slate-900'
            }`}
          >
            <ChevronLeft size={16} />
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                currentPage === page
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg border border-gray-200 transition-colors ${
              currentPage === totalPages 
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-slate-900'
            }`}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientTable;