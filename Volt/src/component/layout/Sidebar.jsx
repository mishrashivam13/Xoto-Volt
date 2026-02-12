import React from 'react';
import { NavLink } from 'react-router-dom';
import Img from "../../assets/xoto vault.png"; // Ensure path is correct
import { 
  Users, FileText, Briefcase, Landmark, 
  FileStack, PlayCircle, Menu, Smartphone 
} from 'lucide-react';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div 
      className={`h-screen flex flex-col fixed left-0 top-0 z-10 font-sans transition-all duration-300 
      ${isCollapsed ? 'w-20' : 'w-64'} 
      bg-gradient-to-b from-[#261041] to-[#261041] text-white border-r border-slate-700`}
    >
      {/* Header Logo */}
      <div className={`p-4 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} h-20`}>
        {!isCollapsed && (
          <div className="font-bold text-xl tracking-tight">
             <img src={Img} alt="Volt Logo" className="w-28" />
          </div>
        )}
        
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* --- UPDATE HERE: Navigation Links Section --- */}
      {/* मैंने यहाँ [&::-webkit-scrollbar]:hidden (Chrome/Safari) और [scrollbar-width:'none'] (Firefox) add किया है */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        
        {/* Workspaces Section */}
        <div>
          {!isCollapsed && (
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">
              Workspaces
            </h3>
          )}
          <div className="space-y-2">
            <NavItem to="/clients" icon={<Users size={20} />} label="Clients" isCollapsed={isCollapsed} />
            <NavItem to="/proposals" icon={<FileText size={20} />} label="Proposals" isCollapsed={isCollapsed} />
            <NavItem to="/cases" icon={<Briefcase size={20} />} label="Cases" isCollapsed={isCollapsed} />
          </div>
        </div>

        {/* Tools Section */}
        <div>
          {!isCollapsed && (
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">
              Tools
            </h3>
          )}
          <div className="space-y-2">
            <NavItem to="/bank-updates" icon={<Landmark size={20} />} label="Bank updates" isCollapsed={isCollapsed} />
            <NavItem to="/bank-products" icon={<Briefcase size={20} />} label="Bank products" isCollapsed={isCollapsed} />
            <NavItem to="/documents" icon={<FileStack size={20} />} label="Documents center" isCollapsed={isCollapsed} />
            <NavItem to="/refer" icon={<Users size={20} />} label="Refer and Earn" isCollapsed={isCollapsed} />
            <NavItem to="/tutorials" icon={<PlayCircle size={20} />} label="Tutorials" isCollapsed={isCollapsed} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <div className={`flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="bg-blue-600 text-white p-2 rounded-lg shadow-lg shadow-blue-900/50">
             <Smartphone size={18} />
          </div>
          {!isCollapsed && (
            <span className="text-sm font-medium text-gray-200">Century Bank Brokers</span>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper Component (Same as before)
const NavItem = ({ to, icon, label, isCollapsed }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all duration-200 group relative
      ${isCollapsed ? 'justify-center' : ''}
      ${isActive 
          ? 'bg-white/10 text-white shadow-inner'
          : 'text-gray-400 hover:bg-white/5 hover:text-white'
      }`
    }
  >
    {({ isActive }) => (
      <>
        <span className={`${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
          {icon}
        </span>
        
        {!isCollapsed && (
          <span className="text-sm font-medium">{label}</span>
        )}

        {isCollapsed && (
          <div className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none shadow-xl border border-slate-700">
            {label}
          </div>
        )}
      </>
    )}
  </NavLink>
);

export default Sidebar;