import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const CuratorsChoice = () => {
  const { content, locale, changeLocale } = useContent();
  const { curatorsChoice } = content.exhibitions;

  return (
    <PageTemplate title="Curator's Choice">
      {curatorsChoice.map((choice) => (
        <div key={choice.month} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{choice.month}</h2>
          <Card className="grid md:grid-cols-2 gap-6">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={choice.artwork.image}
                alt={choice.artwork.title}
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{choice.artwork.title}</h3>
              <p className="text-primary">{choice.artwork.artist}, {choice.artwork.year}</p>
              <p className="text-gray-500">{choice.artwork.medium}</p>
              <p className="text-gray-600 mt-4">{choice.artwork.description}</p>
            </div>
          </Card>
        </div>
      ))}
    </PageTemplate>
  );
};

export default CuratorsChoice;
