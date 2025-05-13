import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const Buildings = () => {
  const { content, locale, changeLocale } = useContent();
  const { buildings } = content.about;

  return (
    <PageTemplate title="NVADB Buildings">
      <div className="space-y-8">
        {buildings.map((building) => (
          <div key={building.name} className="space-y-4">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={building.image}
                alt={building.name}
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold">{building.name}</h2>
            <p className="text-gray-600">{building.description}</p>
            <ul className="list-disc pl-5 space-y-2">
              {building.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Buildings;
