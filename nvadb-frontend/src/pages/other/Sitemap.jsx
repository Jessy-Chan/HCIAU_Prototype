import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const Sitemap = () => {
  const { content, locale, changeLocale } = useContent();
  const { sitemap } = content.other;

  return (
    <PageTemplate title="Sitemap">
      <div className="grid gap-8 md:grid-cols-2">
        {sitemap.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-primary hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Sitemap;
