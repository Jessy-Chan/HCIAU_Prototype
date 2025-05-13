import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Current = () => {
  const { content } = useContent();
  const { current } = content.exhibitions;

  return (
    <PageTemplate title={current.title}>
      <div className="space-y-8">
        {current.array.map((exhibition) => (
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
                <p className="text-primary">
                  <span className="font-medium">{current.datetext}: </span>
                  {exhibition.daterange}
                </p>
                <p className="text-gray-600 mt-2">{exhibition.description}</p>
                <div className="mt-4">
                  <h3 className="font-medium">{current.artiststext}</h3>
                  <div className="mt-2">
                    {exhibition.artists.map((artist, index) => (
                      <span key={index} className="text-primary">
                        {artist}{index < exhibition.artists.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
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
