import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Facilities = () => {
  const { content, locale, changeLocale } = useContent();
  const { facilities } = content.visit;

  return (
    <PageTemplate title={facilities.title}>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">{facilities.amenitiestext}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {facilities.amenities.map((amenity) => (
              <Card key={amenity.name}>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">
                    {/* Icon component would go here */}
                  </span>
                  <div>
                    <h3 className="font-medium">{amenity.name}</h3>
                    <p className="text-sm text-gray-600">{amenity.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{facilities.servicestext}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {facilities.services.map((service) => (
              <Card key={service.name}>
                <h3 className="font-medium">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
                {service.booking && (
                  <p className="text-sm text-primary mt-2">
                    {service.booking}
                  </p>
                )}
                {service.rental && (
                  <p className="text-sm text-primary mt-2">
                    {service.rental}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Facilities;
