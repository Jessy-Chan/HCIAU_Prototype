import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Learn = () => {
  const { content, locale, changeLocale } = useContent();
  const { learn } = content.engage;

  return (
    <PageTemplate title="Learn & References">
      <div className="grid gap-6 md:grid-cols-2">
        {learn.resources.map((resource, index) => (
          <Card key={index}>
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <span className="text-sm text-primary">{resource.type}</span>
                <h2 className="font-semibold mt-1">{resource.title}</h2>
                {resource.duration && (
                  <span className="text-sm text-gray-500">
                    Duration: {resource.duration}
                  </span>
                )}
              </div>
              <a
                href={resource.url}
                className="bg-primary text-white px-4 py-2 rounded-lg"
              >
                View
              </a>
            </div>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Learn;
