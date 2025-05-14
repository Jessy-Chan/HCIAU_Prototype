import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import FormEmbed from '../../components/FormEmbed';
import { useContent } from '../../contexts/ContentContext';

const Help = () => {
  const { content, locale, changeLocale } = useContent();
  const { help } = content.research;

  return (
    <PageTemplate title={help.title}>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">{help.guidestitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {help.guides.map((guide) => (
              <Card key={guide.id}>
                <h3 className="font-semibold">{guide.title}</h3>
                <p className="text-sm text-gray-600">{guide.description}</p>
                <a 
                  href={guide.url}
                  className="text-primary hover:underline mt-2 inline-block"
                >
                  {help.readtext}
                </a>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{help.contacttext}</h2>
          <Card>
            <FormEmbed
              title={help.requesttext}
              fields={[
                { id: 'name', label: help.request.name, type: 'text'},
                { id: 'email', label: help.request.email, type: 'email'},
                { id: 'category', label: help.request.category, type: 'select', options: help.categories},
                { id: 'message', label: help.request.message, type: 'textarea'}
              ]}
              onSubmit={(data) => console.log('Support request:', data)}
            />
          </Card>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Help;
