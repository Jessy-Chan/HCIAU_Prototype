import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Security = () => {
  const { content, locale, changeLocale } = useContent();
  const { security } = content.legal;

  return (
    <PageTemplate title={security.title}>
      <div className="space-y-6">
        <section className="hero-section">
          <h1>{security.title}</h1>
          <p className="text-lg text-gray-600">{security.securitytext}</p>
          <p className="text-sm text-gray-500">{security.lastupdatedtext}: {security.lastUpdated}</p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {security.sections.map((section, index) => (
            <Card key={index} title={section.title}>
              <p className="text-gray-600">{section.content}</p>
            </Card>
          ))}
        </section>
      </div>
    </PageTemplate>
  );
};

export default Security;
