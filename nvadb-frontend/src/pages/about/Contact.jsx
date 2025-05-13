import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import FormEmbed from '../../components/FormEmbed';
import { useContent } from '../../contexts/ContentContext';

const Contact = () => {
  const { content, locale, changeLocale } = useContent();
  const { contact } = content.about;
  
  const formFields = [
    { id: 'name', label: 'Name', type: 'text', required: true },
    { id: 'email', label: 'Email', type: 'email', required: true },
    { id: 'subject', label: 'Subject', type: 'text', required: true },
    { id: 'message', label: 'Message', type: 'textarea', required: true }
  ];

  return (
    <PageTemplate title="Contact Us">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4 text-gray-600">
            <p>{contact.address}</p>
            <p>Tel: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <p>Hours: {contact.hours}</p>
          </div>
        </div>
        
        <div>
          <FormEmbed
            title="Send us a message"
            fields={formFields}
            onSubmit={(data) => console.log('Form submitted:', data)}
          />
        </div>
      </div>
    </PageTemplate>
  );
};

export default Contact;
