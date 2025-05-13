import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mainNavItems = [
    { title: 'About', path: '/about' },
    { title: 'Visit', path: '/visit' },
    { title: 'Exhibitions', path: '/exhibitions' },
    { title: 'Engage', path: '/engage' },
    // ...other main sections
  ];

  return (
    <nav className="bg-primary text-white z-[60]">
      <div className="px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">NVADB</Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {isOpen && (
        <div className="px-4 py-2">
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MobileMenu;
