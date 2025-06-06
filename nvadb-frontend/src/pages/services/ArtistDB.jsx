import React, { useState } from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const ArtistDB = () => {
  const { content, locale, changeLocale } = useContent();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { artistdb } = content.services;

  return (
    <PageTemplate title={artistdb.title}>
      <div className="space-y-6">
        <p className="text-gray-600">{artistdb.description}</p>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100'
            }`}
          >
            {artistdb.alltext}
          </button>
          {artistdb.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="search"
            placeholder={artistdb.searchplaceholder}
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
          <select className="w-full p-3 border rounded-lg bg-gray-200">
            {artistdb.searchFields.map((field) => (
              <option key={field} value={field}>
                {artistdb.searchbytext} {field}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6">
          <p className="text-gray-500 text-center py-8">
            {artistdb.searchdescription}
          </p>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ArtistDB;
