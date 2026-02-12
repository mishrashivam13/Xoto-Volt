import React from 'react';
import { ArrowUpDown } from 'lucide-react';

// Mock Data (Real app me ye API se aayega)
const clientsData = [
  { id: 1, name: "Rekha Yadav", phone: "+971561191967", email: "kanishkayadav1982@gmail.com", created: "24/12/2025", updated: "24/12/2025" },
  { id: 2, name: "Ritesh Sharma", phone: "+971544773817", email: "rits1991@gmail.com", created: "14/01/2025", updated: "22/03/2025" },
  { id: 3, name: "Haj Mohamad Nour Eddin", phone: "+971507813111", email: "nooraldeen79@yahoo.com", created: "08/11/2024", updated: "10/03/2025" },
  { id: 4, name: "Santhosh Chakravarthy Mohan Kumar", phone: "+971529118993", email: "san23.chak@gmail.com", created: "10/12/2024", updated: "19/02/2025" },
];

const ClientTable = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
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
            {clientsData.map((client) => (
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
    </div>
  );
};

export default ClientTable;