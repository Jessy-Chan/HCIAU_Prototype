import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useContent } from '../contexts/ContentContext';

const Header = ({ toggleSidebar }) => {
  const { content, locale, changeLocale } = useContent();
  const languages = content?.metadata?.languages || ['en', 'ms'];
  const languageNames = {
    en: 'EN',
    ms: 'BM'
  };
  const flagImages = {
    en: '/images/icons/en.png',
    ms: '/images/icons/ms.png'
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-black shadow-md z-[60]">
      <div className="flex items-center justify-between h-full px-4">
        <button 
          onClick={toggleSidebar}
          className="md:hidden p-2 hover:bg-gray-100 rounded"
          aria-label="Toggle menu"
        >
          <Bars3Icon className="h-6 w-6 text-light-gray" />
        </button>
        
        <Link 
          to="/" 
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
        >
          <img 
            src="/images/icons/logo.jpeg" 
            alt={content.metadata.siteName}
            className="h-12 w-auto"
          />
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/search" className="rounded hover:bg-gray-600 flex items-center justify-center">
            <img src="/images/icons/search.png" alt={content.metadata.search} className="h-8 w-8" />
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 p-1 pl-8 rounded border border-gray-300 bg-gray-700 flex items-center min-w-[60px]"
              style={{
                backgroundImage: `url(${flagImages[locale]})`,
                backgroundSize: '20px',
                backgroundPosition: '4px center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {languageNames[locale]}
            </button>
            {isOpen && (
              <div className="absolute right-0 top-full mt-1 w-24 bg-gray-800 border border-gray-300 rounded-md shadow-lg z-50 py-1">
                {languages.map(lang => (
                  <button
                    key={lang}
                    onClick={() => {
                      changeLocale(lang);
                      setIsOpen(false);
                    }}
                    className="w-full px-3 py-2 pl-8 bg-gray-800 hover:bg-gray-100 hover:text-gray-800 text-left text-sm flex items-center"
                    style={{
                      backgroundImage: `url(${flagImages[lang]})`,
                      backgroundSize: '16px',
                      backgroundPosition: '8px center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
