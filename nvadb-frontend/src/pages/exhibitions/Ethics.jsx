import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const Ethics = () => {
  const { content, locale, changeLocale } = useContent();
  const { ethics } = content.exhibitions;

  return (
    <PageTemplate title="Gallery Ethics">
      <div className="prose max-w-none">
        <div className="space-y-6">
          {ethics.guidelines.map((guideline, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800">{guideline}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Ethics;
