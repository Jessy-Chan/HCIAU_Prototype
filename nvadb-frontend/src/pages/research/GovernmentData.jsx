import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const GovernmentData = () => {
  const { content, locale, changeLocale } = useContent();
  const { opendata } = content.research;

  return (
    <PageTemplate title={opendata.title}>
      <div className="space-y-8">
        <p className="text-gray-600">{opendata.description}</p>

        <div className="grid gap-6 md:grid-cols-2">
          {opendata.datasets.map((dataset) => (
            <Card key={dataset.id}>
              <h3 className="font-semibold">{dataset.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{dataset.description}</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {opendata.updatetext}{dataset.lastUpdated}
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {opendata.formattext}{dataset.format}
                </span>
              </div>
              <div className="mt-4 flex gap-2">
                <a 
                  href={dataset.viewUrl}
                  className="text-primary hover:underline text-sm"
                >
                  {opendata.viewtext}
                </a>
                <a 
                  href={dataset.downloadUrl}
                  className="text-primary hover:underline text-sm"
                  download
                >
                  {opendata.downloadtext}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default GovernmentData;
