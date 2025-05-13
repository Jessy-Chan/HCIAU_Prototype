import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Helper function to capitalize first letter
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <nav className="text-sm mb-4">
      <ol className="flex space-x-2">
        <li>
          <Link to="/" className="text-primary">Home</Link>
        </li>
        {pathnames.map((name, index) => (
          <li key={name} className="flex items-center">
            <span className="mx-2">/</span>
            <span className="text-gray-500">{capitalizeFirst(name)}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
