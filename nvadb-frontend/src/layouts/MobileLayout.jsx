import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavSidebar from '../components/NavSidebar';
import Footer from '../components/Footer';
import { useContent } from '../contexts/ContentContext';

const MobileLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { content, locale, changeLocale } = useContent();
  const contact = content?.about?.contact || {
    address: '',
    phone: '',
    hours: ''
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        siteName={content?.metadata?.siteName}
      />
      
      <div className="flex flex-1 pt-16">
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
      
      <Footer contact={contact} />
    </div>
  );
};

export default MobileLayout;
