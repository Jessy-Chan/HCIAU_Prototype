import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useContent } from '../contexts/ContentContext';

const NavSidebar = ({ isOpen, toggleSidebar }) => {
  const { content, locale, changeLocale } = useContent();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenus({});
        toggleSidebar(false); // Close sidebar when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toggleSidebar]);

  const toggleMenu = (e, path) => {
    e.preventDefault();
    setOpenMenus(prev => ({
      // Clear all other open menus
      [path]: !prev[path]
    }));
  };

  const navigation = content?.metadata?.navigation?.primary || [];
  
  const getSubItems = (path) => {
    const section = navigation.find(nav => nav.path === path);
    return section?.items || [];
  };

  return (
    <nav ref={navRef} className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out overflow-y-auto z-[51] ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0`}>
      <div className="p-4 flex flex-col h-full">
        <ul className="space-y-2 flex-grow">
          {navigation.map((section) => {
            const subItems = getSubItems(section.path);
            return (
              <li key={section.path} className="relative">
                <button
                  onClick={(e) => toggleMenu(e, section.path)}
                  className={`w-full flex items-center justify-between px-4 py-2 rounded-md text-gray-500 ${
                    location.pathname.startsWith(section.path)
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {section.title}
                  {subItems.length > 0 && (
                    <ChevronDownIcon className={`h-4 w-4 transition-transform ${
                      openMenus[section.path] ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
                {subItems.length > 0 && openMenus[section.path] && (
                  <ul className="mt-1 ml-4 space-y-1 border-l-2 border-gray-200">
                    {subItems.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className={`block px-4 py-1.5 text-sm rounded-md ${
                            location.pathname === item.path
                              ? 'text-primary font-medium'
                              : 'text-gray-600 hover:text-primary'
                          }`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        
        <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500 text-center">
          {content?.metadata?.navigation?.rights}
        </div>
      </div>
    </nav>
  );
};

export default NavSidebar;
