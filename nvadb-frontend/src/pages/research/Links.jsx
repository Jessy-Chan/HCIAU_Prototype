import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Links = () => {
  const { content, locale, changeLocale } = useContent();
  const { links } = content.research;

  return (
    <PageTemplate title="Useful Links">
      <div className="space-y-8">
        {Object.entries(links.categories).map(([category, items]) => (
          <section key={category}>
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {items.map((link) => (
                <Card key={link.url}>
                  <h3 className="font-semibold">{link.title}</h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-2 inline-block"
                  >
                    Visit Website →
                  </a>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Links;
