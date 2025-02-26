import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Sidebar({ contacts, onContactClick }) {
  return (
    <aside className="bg-white dark:bg-gray-800 w-64 p-6 border-r border-gray-200 dark:border-gray-700 h-screen fixed top-16">
      <input 
        type="text" 
        placeholder="Search contacts..." 
        className="mb-4 p-2 w-full rounded border border-gray-300 dark:border-gray-600 focus:outline-none"
      />
      <div className="space-y-2">
        {contacts.map((contact, index) => (
          <div 
            key={index} 
            className="flex items-center p-2 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform transform hover:scale-105"
            onClick={() => onContactClick(contact)}
          >
            <FaUserCircle className="text-xl text-gray-600 dark:text-gray-300" />
            <div className="ml-2">
              <div className="font-medium text-gray-700 dark:text-gray-300">{contact.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{contact.contact}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
