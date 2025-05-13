import React from 'react';

const PageTitle = ({ children }) => {
  return (
    <div className="mb-6 pb-4 border-b border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900">{children}</h1>
    </div>
  );
};

export default PageTitle;
