import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const PortalLinks = () => {
  const { content, locale, changeLocale } = useContent();
  const { portal } = content.other;

  return (
    <PageTemplate title="Portal Site Map">
      <div className="grid gap-6 md:grid-cols-2">
        {portal.externalSystems.map((system) => (
          <Card key={system.title}>
            <h2 className="text-lg font-semibold">{system.title}</h2>
            <p className="text-gray-600 mt-2">{system.description}</p>
            <a
              href={system.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-primary text-white px-4 py-2 rounded-lg"
            >
              Access Portal
            </a>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
};

export default PortalLinks;
