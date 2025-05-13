import React from 'react';

const PageContent = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {children}
    </div>
  );
};

export default PageContent;