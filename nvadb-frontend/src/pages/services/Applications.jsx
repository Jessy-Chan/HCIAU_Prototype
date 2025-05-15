import React, { useState } from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import FormEmbed from '../../components/FormEmbed';
import { useContent } from '../../contexts/ContentContext';

const Applications = () => {
  const { content, locale, changeLocale } = useContent();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { applications } = content.services;

  return (
    <PageTemplate title={applications.title}>
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          {applications.categories.map((category) => (
            <Card key={category.id}>
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-gray-600 mt-2">{category.description}</p>
              <div className="mt-4">
                <h4 className="font-medium mb-2">{applications.requirementstext}</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {category.requirements.map((req, index) => (
                    <li key={index} className="text-gray-600">{req}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setSelectedCategory(category)}
                className="mt-4 bg-primary text-white px-4 py-2 rounded-lg w-full"
              >
                {applications.applytext}
              </button>
            </Card>
          ))}
        </div>

        {selectedCategory && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
              <FormEmbed
                title={`${applications.form.title} ${selectedCategory.title}`}
                fields={Object.values(selectedCategory.form).map(field => ({
                  id: field.id,
                  label: field.name,
                  type: field.type,
                  multiple: field.multiple !== undefined ? field.multiple : false,
                  required: field.required !== undefined ? field.required : true  // Add this line
                }))}
                onSubmit={() => setSelectedCategory(null)}
                locale={locale}
              />
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-2 btn-primary bg-red-500 hover:bg-red-600"
              >
                {applications.form.cancel}
              </button>
            </div>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default Applications;
