import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Current = () => {
  const { content, locale, changeLocale } = useContent();
  const { current } = content.exhibitions;

  return (
    <PageTemplate title="Current Exhibitions">
      <div className="space-y-8">
        {current.map((exhibition) => (
          <Card key={exhibition.id} className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{exhibition.title}</h2>
                <p className="text-primary">{exhibition.dateRange}</p>
                <p className="text-gray-600 mt-2">{exhibition.description}</p>
                <div className="mt-4">
                  <h3 className="font-medium">Featured Artists</h3>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Current;
