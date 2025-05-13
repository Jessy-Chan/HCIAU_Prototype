import React from 'react';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Privacy = () => {
  const { content, locale, changeLocale } = useContent();
  const { privacy } = content.legal;

  return (
    <div className="space-y-6">
      <section className="hero-section">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last Updated: {privacy.lastUpdated}</p>
      </section>
      
      <section className="grid grid-cols-1 gap-6">
        {privacy.sections.map((section, index) => (
          <Card key={index} title={section.title}>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Privacy;
