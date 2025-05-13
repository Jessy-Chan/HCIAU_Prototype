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
      options: feedback.categories,
      required: true 
    },
    { id: 'title', label: formfields.subject, type: 'text', required: true },
    { id: 'message', label: formfields.message, type: 'textarea', required: true },
    { id: 'name', label: formfields.name, type: 'text', required: true },
    { id: 'email', label: formfields.email, type: 'email', required: true },
    { id: 'attachments', label: formfields.attachments, type: 'file', multiple: true }
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
