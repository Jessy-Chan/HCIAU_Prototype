import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Cafe = () => {
  const { content, locale, changeLocale } = useContent();
  const { cafe } = content.visit;

  return (
    <PageTemplate title="Sejiwa Titiwangsa Café">
      <div className="space-y-8">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src="/public/images/cafe.jpg"
            alt={cafe.name}
            className="object-cover rounded-lg"
          />
        </div>

        <section>
          <p className="text-gray-600 text-lg">{cafe.description}</p>
          <p className="text-primary mt-2">Open: {cafe.hours}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{cafe.menutext}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="font-medium mb-2">{cafe.dailytext}</h3>
              <ul className="space-y-2">
                {cafe.menu.highlights.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="font-medium mb-2">{cafe.cheftext}</h3>
              {cafe.menu.specialties.map((item) => (
                <div key={item.name} className="mb-2">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-primary">{item.price}</p>
                </div>
              ))}
            </Card>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Cafe;
