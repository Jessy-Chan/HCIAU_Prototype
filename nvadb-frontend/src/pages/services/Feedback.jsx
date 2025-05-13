import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import FormEmbed from '../../components/FormEmbed';
import { useContent } from '../../contexts/ContentContext';

const Feedback = () => {
  const { content, locale, changeLocale } = useContent();
  const { feedback } = content.services;

  const formFields = [
    { 
      id: 'category', 
      label: 'Feedback Category', 
      type: 'select', 
      options: feedback.categories,
      required: true 
    },
    { id: 'title', label: 'Subject', type: 'text', required: true },
    { id: 'message', label: 'Your Feedback', type: 'textarea', required: true },
    { id: 'name', label: 'Name', type: 'text', required: true },
    { id: 'email', label: 'Email', type: 'email', required: true },
    { id: 'attachments', label: 'Attachments', type: 'file', multiple: true }
  ];

  return (
    <PageTemplate title="Feedback & Complaints">
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">
          We value your feedback to improve our services. Please fill out the form below.
        </p>

        <FormEmbed
          title="Submit Feedback"
          fields={formFields}
          onSubmit={(data) => console.log('Feedback submitted:', data)}
        />
      </div>
    </PageTemplate>
  );
};

export default Feedback;
