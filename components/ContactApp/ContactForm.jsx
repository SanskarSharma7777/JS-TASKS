import React, { useState } from 'react';

function ContactForm({ onSave, onCancel }) {
  const [contact, setContact] = useState({ name: '', contact: '', email: '', address: '', company: '', notes: '' });

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(contact);
  }

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-lg">
        {['name', 'contact', 'email', 'address', 'company', 'notes'].map((field, index) => (
          <div className="mb-4" key={index}>
            <input
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={contact[field]}
              onChange={handleChange}
              className="p-2 w-full rounded border border-gray-300 dark:border-gray-600 focus:outline-none"
            />
          </div>
        ))}
        <div className="flex justify-between">
          <button type="button" onClick={onCancel} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition-transform transform hover:scale-105">
            Cancel
          </button>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-transform transform hover:scale-105">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
