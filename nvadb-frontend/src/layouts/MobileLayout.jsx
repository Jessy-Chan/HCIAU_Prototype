import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import NavSidebar from '../components/NavSidebar';
import BottomNav from '../components/BottomNav';
import { useContent } from '../contexts/ContentContext';

const MobileLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { content } = useContent();
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position on page change
    window.scrollTo(0, 0);
    // Close sidebar on navigation
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        siteName={content?.metadata?.siteName}
      />
      
      <div className="flex flex-1 pt-16 pb-16"> {/* Added pb-16 for bottom nav spacing */}
        <NavSidebar 
          isOpen={sidebarOpen} 
          toggleSidebar={setSidebarOpen}
          navigation={content?.metadata?.navigation}
        />        
        <main className="flex-1 px-4 py-6 md:ml-64 overflow-y-auto">
          <div className="container mx-auto max-w-4xl">
            <Outlet />
          </div>
        </main>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default MobileLayout;
