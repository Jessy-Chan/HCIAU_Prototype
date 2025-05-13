import React, { useRef } from 'react';

const FormEmbed = ({ title, fields, onSubmit, locale }) => {
  const fileLabels = {
    ms: {
      choose: "Pilih Fail",
      noFile: "Tiada fail dipilih"
    },
    en: {
      choose: "Choose File",
      noFile: "No file chosen"
    }
  };

  const renderInput = (field) => {
    if (field.type === 'file') {
      const [fileName, setFileName] = React.useState('');
      const fileInput = useRef(null);

      return (
        <div className="flex items-center space-x-2">
          <label className="bg-primary text-white px-4 py-2 rounded cursor-pointer">
            {fileLabels[locale].choose}
            <input
              ref={fileInput}
              type="file"
              className="hidden"
              multiple={field.multiple}
              required={field.required}
              onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
            />
          </label>
          <span className="text-gray-600">
            {fileName || fileLabels[locale].noFile}
          </span>
        </div>
      );
    }

    return (
      <input
        type={field.type}
        name={field.id}
        className="w-full px-3 py-2 border rounded-md text-gray-700"
        required={field.required}
      />
    );
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2>{title}</h2>
      {fields.map((field) => (
        <div key={field.id} className="form-field">
          <label className="block text-sm font-medium mb-1">
            {field.label}
          </label>
          {renderInput(field)}
        </div>
      ))}
      <button type="submit" className="btn-primary">
        {locale === 'ms' ? 'Hantar' : 'Submit'}
      </button>
    </form>
  );
};

export default FormEmbed;
