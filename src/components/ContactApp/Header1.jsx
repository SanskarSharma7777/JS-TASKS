import React from 'react';

function Header({ onNewContact, toggleDarkMode }) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Contact App</h1>
        <div className="flex space-x-4">
          <button 
            onClick={onNewContact}
            className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            New +
          </button>
          <button 
            onClick={toggleDarkMode}
            className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            🌙
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
