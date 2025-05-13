import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';

const BottomNav = () => {
  const { content } = useContent();
  const location = useLocation();
  const navItems = content?.metadata?.bottomNav || [];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-between">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex-1 flex flex-col items-center py-2 ${
              location.pathname === item.path ? 'text-primary' : 'text-gray-600'
            }`}
          >
            <img src={item.icon} alt={item.title} className="w-6 h-6 mb-1" />
            <span className="text-xs">{item.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
