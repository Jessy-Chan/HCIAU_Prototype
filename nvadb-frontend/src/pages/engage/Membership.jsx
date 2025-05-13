import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Membership = () => {
  const { content, locale, changeLocale } = useContent();
  const { membership } = content.engage;

  return (
    <PageTemplate title="NAG FRIENDS Membership">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          {membership.levels.map((level) => (
            <Card key={level.name}>
              <h2 className="text-xl font-semibold">{level.name}</h2>
              <p className="text-primary mt-1">{level.annual}/year</p>
              <ul className="mt-4 space-y-2">
                {level.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg">
                Join Now
              </button>
            </Card>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Membership;
