import React from 'react';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

const Privacy = () => {
  const { content, locale, changeLocale } = useContent();
  const { privacy } = content.legal;

  return (
    <PageTemplate title={privacy.title}>
      <div className="space-y-6">
        <section className="hero-section">
          <h1>{privacy.title}</h1>
          <p className="text-lg text-gray-600">{privacy.privacytext}</p>
          <p className="text-sm text-gray-500">{privacy.lastupdatedtext}: {privacy.lastUpdated}</p>
        </section>
        
        <section className="grid grid-cols-1 gap-6">
          {privacy.sections.map((section, index) => (
            <Card key={index} title={section.title}>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </Card>
          ))}
        </section>
      </div>
    </PageTemplate>
  );
};

export default Privacy;
