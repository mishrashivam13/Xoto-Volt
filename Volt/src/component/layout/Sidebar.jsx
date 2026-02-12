import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { 
  Users, FileText, Briefcase, Landmark, 
  FileStack, PlayCircle, Menu, Smartphone 
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 z-10 font-sans">
      {/* Header Logo */}
      <div className="p-4 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-slate-900">
          Huspy<span className="font-light text-slate-400">+</span>Brokers™
        </div>
        <button className="p-1 rounded hover:bg-gray-100">
          <Menu size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
        <div>
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-3">Workspaces</h3>
          <div className="space-y-1">
            {/* 'to' prop batata hai kaha jana hai */}
            <NavItem to="/clients" icon={<Users size={18} />} label="Clients" />
            <NavItem to="/proposals" icon={<FileText size={18} />} label="Proposals" />
            <NavItem to="/cases" icon={<Briefcase size={18} />} label="Cases" />
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-3">Tools</h3>
          <div className="space-y-1">
            {/* Dummy links for now */}
            <NavItem to="/bank-updates" icon={<Landmark size={18} />} label="Bank updates" />
            <NavItem to="/bank-products" icon={<Briefcase size={18} />} label="Bank products" />
            <NavItem to="/documents" icon={<FileStack size={18} />} label="Documents center" />
            <NavItem to="/refer" icon={<Users size={18} />} label="Refer and Earn" />
            <NavItem to="/tutorials" icon={<PlayCircle size={18} />} label="Tutorials" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer text-blue-600">
          <div className="bg-blue-600 text-white p-1 rounded">
             <Smartphone size={16} />
          </div>
          <span className="text-sm font-medium text-slate-700">Century Bank Brokers</span>
        </div>
      </div>
    </div>
  );
};

// Updated Helper Component using NavLink
const NavItem = ({ to, icon, label }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
        isActive 
          ? 'bg-white shadow-sm border border-gray-100 text-slate-900' // Active Style
          : 'text-gray-500 hover:bg-gray-50 hover:text-slate-900'     // Inactive Style
      }`
    }
  >
    {/* Icon ka color bhi change hoga active state ke hisab se */}
    {({ isActive }) => (
      <>
        <span className={isActive ? 'text-slate-900' : 'text-gray-400'}>{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </>
    )}
  </NavLink>
);

export default Sidebar;