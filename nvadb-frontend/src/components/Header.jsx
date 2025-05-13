import React from 'react';
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
            src="/images/icons/logo.png" 
            alt={content.metadata.siteName}
            className="h-12 w-auto"
          />
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/search" className="ml-4 p-1 bg-gray-700 text-white rounded hover:bg-gray-300">
            {content.metadata.search}
          </Link>
          <select 
            value={locale} 
            onChange={(e) => changeLocale(e.target.value)}
            className="ml-4 p-1 rounded border border-gray-300"
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>
                {languageNames[lang]}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
