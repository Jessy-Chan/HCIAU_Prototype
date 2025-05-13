import React, { useState } from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const StaffDirectory = () => {
  const { content, locale, changeLocale } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const { staffDirectory } = content.about;

  const filteredStaff = staffDirectory.staff.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageTemplate title="Staff Directory">
      <div className="space-y-6">
        <input
          type="search"
          placeholder="Search staff..."
          className="w-full p-2 border rounded-md"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {filteredStaff.map((person) => (
            <div key={person.id} className="p-4 border rounded-lg">
              <h3 className="font-semibold">{person.name}</h3>
              <p className="text-gray-600">{person.position}</p>
              <p className="text-sm text-gray-500">{person.department}</p>
              {person.contact && (
                <p className="text-sm text-primary mt-2">{person.contact}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default StaffDirectory;
