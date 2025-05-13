import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const OrgChart = () => {
  const { content, locale, changeLocale } = useContent();
  const { orgChart } = content.about;

  return (
    <PageTemplate title="Organisation Chart">
      <div className="space-y-6">
        <p className="text-gray-600">{orgChart.description}</p>
        
        <div className="relative w-full overflow-x-auto">
          <picture>
            <source srcSet="/public/images/org-chart-mobile.svg" media="(max-width: 768px)" />
            <img 
              src="/public/images/org-chart.svg" 
              alt="NVADB Organization Structure"
              className="w-full"
            />
          </picture>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Departments</h2>
          {orgChart.departments.map((dept) => (
            <div key={dept.name} className="mb-4">
              <h3 className="font-medium">{dept.name}</h3>
              <p className="text-gray-600">{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default OrgChart;
