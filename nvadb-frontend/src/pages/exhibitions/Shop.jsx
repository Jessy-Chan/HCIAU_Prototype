import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Shop = () => {
  const { content, locale, changeLocale } = useContent();
  const { shop } = content.exhibitions;

  return (
    <PageTemplate title="Gallery Shop">
      <div className="space-y-8">
        {shop.categories.map((category) => (
          <section key={category.name}>
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {category.items.map((item) => (
                <Card key={item.id}>
                  <div className="aspect-w-1 aspect-h-1 mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-primary">{item.price}</p>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Shop;
