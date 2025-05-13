import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const ResourceMedia = () => {
  const { content, locale, changeLocale } = useContent();
  const { resources } = content.engage;

  return (
    <PageTemplate title={resources.title}>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">{resources.digitalresourcestext}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {resources.digital.map((resource) => (
              <Card key={resource.id}>
                <h3 className="font-medium">{resource.title}</h3>
                <p className="text-gray-600 mt-1">{resource.description}</p>
                <a 
                  href={resource.url}
                  className="text-primary hover:underline mt-2 inline-block"
                >
                  {resources.accesstext}
                </a>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{resources.downloadmaterialstext}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {resources.downloads.map((item) => (
              <Card key={item.id}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <span className="text-sm text-gray-500">{item.format}</span>
                  </div>
                  <a 
                    href={item.downloadUrl}
                    className="text-primary hover:underline"
                    download
                  >
                    {resources.downloadtext}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default ResourceMedia;
