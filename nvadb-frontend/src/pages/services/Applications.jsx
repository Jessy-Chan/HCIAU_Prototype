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
    <PageTemplate title="Online Application Portal">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          {applications.categories.map((category) => (
            <Card key={category.id}>
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-gray-600 mt-2">{category.description}</p>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Requirements:</h4>
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
                Apply Now
              </button>
            </Card>
          ))}
        </div>

        {selectedCategory && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
              <FormEmbed
                title={`Apply for ${selectedCategory.title}`}
                fields={[
                  { id: 'name', label: 'Full Name', type: 'text', required: true },
                  { id: 'email', label: 'Email', type: 'email', required: true },
                  { id: 'documents', label: 'Required Documents', type: 'file', multiple: true, required: true }
                ]}
                onSubmit={() => setSelectedCategory(null)}
              />
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 text-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default Applications;
