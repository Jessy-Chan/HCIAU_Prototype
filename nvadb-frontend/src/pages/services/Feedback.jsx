import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import FormEmbed from '../../components/FormEmbed';
import { useContent } from '../../contexts/ContentContext';

const Feedback = () => {
  const { content, locale, changeLocale } = useContent();
  const { feedback, formfields } = content.services;

  const formFields = [
    { 
      id: 'category', 
      label: formfields.category, 
      type: 'select', 
      options: feedback.categories
    },
    { id: 'title', label: formfields.subject, type: 'text'},
    { id: 'message', label: formfields.message, type: 'textarea'},
    { id: 'name', label: formfields.name, type: 'text'},
    { id: 'email', label: formfields.email, type: 'email'},
    { id: 'attachments', label: formfields.attachments, type: 'file', multiple: true, required:false}
  ];

  return (
    <PageTemplate title={feedback.title}>
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">
          {feedback.description}
        </p>

        <FormEmbed
          title={feedback.title}
          fields={formFields}
          onSubmit={(data) => console.log('Feedback submitted:', data)}
          locale={locale}
        />
      </div>
    </PageTemplate>
  );
};

export default Feedback;
