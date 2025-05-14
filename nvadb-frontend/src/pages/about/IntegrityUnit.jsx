import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import FormEmbed from '../../components/FormEmbed';
import { useContent } from '../../contexts/ContentContext';

const IntegrityUnit = () => {
  const { content, locale, changeLocale } = useContent();
  const { integrity } = content.about;
  
  const reportFormFields = [
    { id: 'type', label: 'Report Type', type: 'select', options: integrity.reportTypes},
    { id: 'description', label: 'Description', type: 'textarea'},
    { id: 'evidence', label: 'Supporting Documents', type: 'file', multiple: true },
    { id: 'contact', label: 'Contact Information', type: 'text', required: false }
  ];

  return (
    <PageTemplate title="Integrity Unit">
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Our Commitment to Integrity</h2>
          <p className="text-gray-600">{integrity.commitment}</p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Report an Issue</h2>
          <FormEmbed
            title="Integrity Report Form"
            fields={reportFormFields}
            onSubmit={(data) => console.log('Report submitted:', data)}
          />
        </section>
      </div>
    </PageTemplate>
  );
};

export default IntegrityUnit;
