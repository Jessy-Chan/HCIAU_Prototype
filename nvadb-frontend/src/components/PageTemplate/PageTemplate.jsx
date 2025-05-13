import React from 'react';
import PageTitle from './PageTitle';
import PageContent from './PageContent';
import Breadcrumb from '../Breadcrumb';

const PageTemplate = ({ title, children }) => {
  return (
    <div className="min-h-full w-full">
      <Breadcrumb />
      <PageTitle>{title}</PageTitle>
      <PageContent>
        {children}
      </PageContent>
    </div>
  );
};

export default PageTemplate;
