import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import FormEmbed from '../../components/FormEmbed';
import { useContent } from '../../contexts/ContentContext';

const Programs = () => {
  const { content, locale, changeLocale } = useContent();
  const { programs } = content.engage;

  return (
    <PageTemplate title={programs.title}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{programs.programtext}</h1>
        <div className="space-y-4">
          <p>{programs.welcometext}</p>
          <div className="space-y-8">
            {programs.program.map((program) => (
              <Card key={program.id} className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">{program.title}</h2>
                  <p className="text-primary">{programs.scheduletext}: {program.schedule}</p>
                  <p className="text-gray-600">{program.description}</p>
                  <div className="mt-2">
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                      {programs.agetext}: {program.ageGroup}
                    </span>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full ml-2">
                      {programs.feetext}: {program.registration.fee}
                    </span>
                  </div>
                </div>
                
                <FormEmbed
                  title={programs.form[0].title}
                  fields={[
                    { id: 'name', label: programs.form[0].name, type: 'text', required: true },
                    { id: 'email', label: programs.form[0].email, type: 'email', required: true },
                    { id: 'age', label: programs.form[0].age, type: 'number', required: true }
                  ]}
                  onSubmit={(data) => console.log('Program registration:', data)}
                  locale={locale}
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
