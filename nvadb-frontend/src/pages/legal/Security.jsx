import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Security = () => {
  const { content, locale, changeLocale } = useContent();
  const { security } = content.legal;

  return (
    <PageTemplate title="Security Policy">
      <div className="space-y-6">
        <section className="hero-section">
          <h1>Security Policy</h1>
          <p className="text-sm text-gray-500">Last Updated: {security.lastUpdated}</p>
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
