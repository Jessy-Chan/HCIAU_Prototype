import React from 'react';

const FormEmbed = ({ title, fields, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2>{title}</h2>
      {fields.map((field) => (
        <div key={field.id} className="form-field">
          <label className="block text-sm font-medium mb-1">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.id}
            className="w-full px-3 py-2 border rounded-md text-gray-100"
            required={field.required}
          />
        </div>
      ))}
      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormEmbed;
