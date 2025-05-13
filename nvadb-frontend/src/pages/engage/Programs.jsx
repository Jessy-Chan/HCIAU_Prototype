import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import FormEmbed from '../../components/FormEmbed';
import { useContent } from '../../contexts/ContentContext';

const Programs = () => {
  const { content, locale, changeLocale } = useContent();
  const { programs } = content.engage;

  return (
    <PageTemplate title="Art Development Programmes">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Our Programs</h1>
        <div className="space-y-4">
          <p>Welcome to NVADB's Programs page.</p>
          <div className="space-y-8">
            {programs.map((program) => (
              <Card key={program.id} className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">{program.title}</h2>
                  <p className="text-primary">Schedule: {program.schedule}</p>
                  <p className="text-gray-600">{program.description}</p>
                  <div className="mt-2">
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                      Age: {program.ageGroup}
                    </span>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full ml-2">
                      Fee: {program.registration.fee}
                    </span>
                  </div>
                </div>
                
                <FormEmbed
                  title="Register for Program"
                  fields={[
                    { id: 'name', label: 'Full Name', type: 'text', required: true },
                    { id: 'email', label: 'Email', type: 'email', required: true },
                    { id: 'age', label: 'Age', type: 'number', required: true }
                  ]}
                  onSubmit={(data) => console.log('Program registration:', data)}
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Programs;
