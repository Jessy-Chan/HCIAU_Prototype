import React from 'react';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

const Disclaimer = () => {
  const { content, locale, changeLocale } = useContent();
  const { disclaimer } = content.legal;

  return (
    <PageTemplate title={disclaimer.title}>
      <div className="space-y-6">
        <section className="hero-section">
          <h1>{disclaimer.title}</h1>
          <p className="text-lg text-gray-600">{disclaimer.disclaimertext}</p>
          <p className="text-sm text-gray-500">{disclaimer.lastupdatedtext}: {disclaimer.lastUpdated}</p>
        </section>

        <section className="mb-8">
          <Card>
            <p className="text-gray-600 leading-relaxed">{disclaimer.content}</p>
          </Card>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {disclaimer.sections.map((section, index) => (
            <Card key={index} title={section.title}>
              <p className="text-gray-600">{section.content}</p>
            </Card>
          ))}
        </section>
      </div>
    </PageTemplate>
  );
};

export default Disclaimer;
