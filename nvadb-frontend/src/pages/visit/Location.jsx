import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const Location = () => {
  const { content, locale, changeLocale } = useContent();
  const { location } = content.visit;

  return (
    <PageTemplate title={location.title}>
      <div className="space-y-6">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
          {/* Map component would go here */}
          <img 
            src="/images/facilities/nav-map.jpg" 
            alt="NAG Location Map"
            className="object-cover w-full h-full"
          />
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">{location.addresstext}</h2>
          <p className="text-gray-600">{location.address}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">{location.directions.title}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-medium mb-2">{location.directions.public}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {location.directions.byPublicTransport.map((direction, index) => (
                  <li key={index} className="text-gray-600">{direction}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">{location.directions.driving}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {location.directions.byDriving.map((direction, index) => (
                  <li key={index} className="text-gray-600">{direction}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Location;
