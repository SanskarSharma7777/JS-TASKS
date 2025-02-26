import React from 'react';

function ContactDetails({ contact, onBack }) {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-lg">
        <button 
          onClick={onBack} 
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition-transform transform hover:scale-105 mb-4"
        >
          Back
        </button>
        {Object.entries(contact).map(([key, value], index) => (
          <div className="mb-2" key={index}>
            <strong className="text-slate-200 dark:text-gray-300">{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactDetails;
