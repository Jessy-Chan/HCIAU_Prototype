import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const Ethics = () => {
  const { content } = useContent();
  const { ethics } = content.exhibitions;

  return (
    <PageTemplate title={ethics.title}>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-6">{ethics.introtext}</p>
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
