import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar Hamesha Left Me Rahega */}
      <Sidebar />
      
      {/* Dynamic Content Area (Right Side) */}
      <main className="flex-1 ml-64 bg-white min-h-screen">
        {children} 
      </main>
    </div>
  );
};

export default Layout;