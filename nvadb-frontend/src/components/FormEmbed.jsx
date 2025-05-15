import React, { useRef } from 'react';

const FormEmbed = ({ title, fields, onSubmit, locale }) => {
  const labels = {
    ms: {
      choose: "Pilih Fail",
      noFile: "Tiada fail dipilih",
      enter: "Masukkan",
      required: "diperlukan!",
      submit: "Hantar",
      invalidEmail: "Alamat emel tidak sah"
    },
    en: {
      choose: "Choose File",
      noFile: "No file chosen",
      enter: "Enter",
      required: "is required!",
      submit: "Submit",
      invalidEmail: "Invalid email address"
    }
  };

  const renderInput = (field) => {
    if (field.type === 'file') {
      const [fileName, setFileName] = React.useState('');
      const fileInput = useRef(null);

      return (
        <div className="flex items-center space-x-2">
          <label className="bg-primary text-white px-4 py-2 rounded cursor-pointer">
            {labels[locale].choose}
            <input
              ref={fileInput}
              type="file"
              className="hidden"
              multiple={field.multiple}
              required={field.required !== undefined ? field.required : true}
              onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
            />
          </label>
          <span className="text-gray-600">
            {fileName || labels[locale].noFile}
          </span>
        </div>
      );
    }

    const [validationMessage, setValidationMessage] = React.useState('');

    const handleBlur = (e) => {
      const message = (field.required !== undefined ? field.required : true) && !e.target.value 
        ? `${field.id.charAt(0).toUpperCase() + field.id.slice(1)} ${labels[locale].required}`
        : '';
      setValidationMessage(message);
    };

    const handleEmailBlur = (e) => {
      if (e.target.value && validationMessage=='') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (field.type === 'email' && !emailPattern.test(e.target.value)) {
          const message = labels[locale].invalidEmail;
          setValidationMessage(message);
        }
      }
    };

    return (
      <div>
        <input
          type={field.type}
          name={field.id}
          className="w-full px-3 py-2 border rounded-md text-gray-100 invalid:border-red-500"
          required={field.required !== undefined ? field.required : true}
          onBlur={(e) => {
            handleBlur(e);
            if (field.type === 'email') {
              handleEmailBlur(e);
            }
          }}
          onInput={(e) => {
            setValidationMessage('');
          }}
        />
        <label className="text-red-500 text-sm mt-1">
          {validationMessage}
        </label>
      </div>
    );
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2>{title}</h2>
      {fields.map((field) => (
        <div key={field.id} className="form-field">
          <label className="block text-sm font-medium mb-1">
            {field.label}
            {(field.required !== undefined ? field.required : true) && 
              <span className="text-red-500"> *</span>
            }
          </label>
          {renderInput(field)}
        </div>
      ))}
      <button type="submit" className="btn-primary">
        {labels[locale].submit}
      </button>
    </form>
  );
};

export default FormEmbed;