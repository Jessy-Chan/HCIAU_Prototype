import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const CorporatePartners = () => {
  const { content, locale, changeLocale } = useContent();
  const { partners } = content.about;

  return (
    <PageTemplate title="Corporate Partners & Opportunities">
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Current Partners</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {partners.current.map((partner) => (
              <Card key={partner.id} className="flex items-center space-x-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 object-contain"
                />
                <div>
                  <h3 className="font-semibold">{partner.name}</h3>
                  <p className="text-gray-600">{partner.contribution}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Partnership Opportunities</h2>
          <div className="prose max-w-none">
            {partners.opportunities.map((opportunity, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-medium">{opportunity.title}</h3>
                <p className="text-gray-600">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default CorporatePartners;
