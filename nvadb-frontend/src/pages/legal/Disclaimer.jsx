import React from 'react';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Disclaimer = () => {
  const { content, locale, changeLocale } = useContent();
  const { disclaimer } = content.legal;

  return (
    <div className="space-y-6">
      <section className="hero-section">
        <h1>Disclaimer</h1>
        <p className="text-sm text-gray-500">Last Updated: {disclaimer.lastUpdated}</p>
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
  );
};

export default Disclaimer;
