import React, { useState } from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const FAQ = () => {
  const { content, locale, changeLocale } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeQuestion, setActiveQuestion] = useState(null);
  const { faq } = content.research;

  const filteredQuestions = faq.questions.filter(q => 
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageTemplate title={faq.title}>
      <div className="space-y-6">
        <input
          type="search"
          placeholder={faq.searchplaceholder}
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="space-y-4">
          {filteredQuestions.map((q) => (
            <div 
              key={q.id}
              className="border rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}
              >
                <span className="font-medium">{q.question}</span>
                <span className="text-primary">
                  {activeQuestion === q.id ? '−' : '+'}
                </span>
              </button>
              {activeQuestion === q.id && (
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-gray-600">{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default FAQ;
