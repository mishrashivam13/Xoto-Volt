import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Component with Props */}
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      
      {/* Main Content Area 
         Dynamic margin: ml-20 (80px) agar collapsed hai, nahi to ml-64 (256px) 
      */}
      <main 
        className={`flex-1 min-h-screen transition-all duration-300 ease-in-out ${
          isCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        {children} 
      </main>
    </div>
  );
};

export default Layout;