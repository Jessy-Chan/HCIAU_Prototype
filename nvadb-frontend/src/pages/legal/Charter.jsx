import React from 'react';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

const Charter = () => {
  const { content, locale, changeLocale } = useContent();
  const { charter } = content.legal;

  return (
    <PageTemplate title={charter.title}>
      <div className="space-y-6">
        <section className="hero-section">
          <h1>{charter.title}</h1>
          <p className="text-lg text-gray-600">{charter.commitment}</p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title={charter.standardstext}>
            {charter.standards.map((standard, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-medium">{standard.area}</h3>
                <p className="text-primary">{standard.target}</p>
              </div>
            ))}
          </Card>
          
          <Card title={charter.commitmentstext}>
            <ul className="space-y-2">
              {charter.promises?.map((promise, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-gray-600">{promise}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Charter;
