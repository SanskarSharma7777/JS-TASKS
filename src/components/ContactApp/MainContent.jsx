import React from 'react';

function MainContent({ contacts }) {
  const duplicateCount = contacts.length - new Set(contacts.map(c => c.contact)).size;

  return (
    <main className="flex flex-col justify-center items-center text-center space-y-6 bg-white dark:bg-gray-900 p-6 transition-all duration-500">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300">Welcome to My Contact App</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400">
        Number of Contacts: <span className="font-semibold">{contacts.length}</span>
      </p>
      <p className="text-xl text-gray-600 dark:text-gray-400">
        Duplicate Contacts: <span className="font-semibold">{duplicateCount}</span>
      </p>
    </main>
  );
}

export default MainContent;
