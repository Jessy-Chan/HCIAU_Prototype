import React, { useState } from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Downloads = () => {
  const { content, locale, changeLocale } = useContent();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { downloads } = content.research;

  const filteredForms = selectedCategory === 'all' 
    ? downloads.forms
    : downloads.forms.filter(form => form.category === selectedCategory);

  return (
    <PageTemplate title={downloads.title}>
      <div className="space-y-6">
        <select 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-auto border rounded-lg p-2 bg-gray-200"
        >
          <option value="all">{downloads.categorytext}</option>
          {downloads.categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <div className="grid gap-4 md:grid-cols-2">
          {filteredForms.map((form) => (
            <Card key={form.id}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{form.title}</h3>
                  <p className="text-sm text-gray-600">{form.description}</p>
                  <span className="text-xs text-gray-500">
                    {downloads.formattext}: {form.format} • {downloads.sizetext}: {form.size}
                  </span>
                </div>
                <a 
                  href={form.downloadUrl}
                  className="bg-primary text-white px-3 py-1 rounded text-sm"
                  download
                >
                  {downloads.downloadtext} →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Downloads;
