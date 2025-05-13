import React from 'react';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Terms = () => {
  const { content, locale, changeLocale } = useContent();
  const { terms } = content.legal;

  return (
    <div className="space-y-6">
      <section className="hero-section">
        <h1>Terms & Conditions</h1>
        <p className="text-sm text-gray-500">Last Updated: {terms.lastUpdated}</p>
      </section>
      
      <section className="grid grid-cols-1 gap-6">
        {terms.sections.map((section, index) => (
          <Card key={index} title={section.title}>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Terms;
