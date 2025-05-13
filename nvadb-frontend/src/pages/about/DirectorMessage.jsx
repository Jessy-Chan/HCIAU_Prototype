import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const DirectorMessage = () => {
  const { content, locale, changeLocale } = useContent();
  const { directorMessage } = content.about;

  return (
    <PageTemplate title="Director General's Message">
      <div className="space-y-6">
        <div className="flex items-start space-x-6">
          <div className="flex-1">
            <p className="text-gray-600 leading-relaxed">{directorMessage.content}</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="font-semibold">{directorMessage.director.name}</h3>
          <p className="text-gray-600">{directorMessage.director.title}</p>
          <p className="text-sm text-gray-500">{directorMessage.director.period}</p>
        </div>
      </div>
    </PageTemplate>
  );
};

export default DirectorMessage;
