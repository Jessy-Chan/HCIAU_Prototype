import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import PageTemplate from '../components/PageTemplate/PageTemplate';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { content } = useContent();
  const navigation = content?.metadata?.navigation?.primary || [];

  // Flatten navigation items into searchable array
  const allPages = navigation.reduce((acc, section) => {
    acc.push({ 
      title: section.title, 
      path: section.path 
    });
    if (section.items) {
      acc.push(...section.items.map(item => ({
        title: item.title,
        path: item.path,
        parent: section.title
      })));
    }
    return acc;
  }, []);

  // Filter pages based on search term
  const filteredPages = allPages.filter(page => 
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (page.parent && page.parent.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <PageTemplate title="Search">
      <div className="max-w-2xl mx-auto p-4">
        <input
          type="text"
          placeholder={content.metadata?.searchPlaceholder || 'Search...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="space-y-4">
          {filteredPages.map((page, index) => (
            <Link
              key={`${page.path}-${index}`}
              to={page.path}
              className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900">{page.title}</h3>
              {page.parent && (
                <p className="text-sm text-gray-500 mt-1">
                  {page.parent}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Search;
