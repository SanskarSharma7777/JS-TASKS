import React from 'react';

export default function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3">
        <a href="https://praleetechnology.com" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tasks: Sanskar Sharma ,Piyush Solanki,Shyam Sajjan & Harsh Bhalerao</span>
        </a>
        <a href="https://sdits.netlify.app/">
          <span className="self-center text-2xl font-light whitespace-nowrap dark:text-white">SDITS.</span>
        </a>
      </div>
    </nav>
  );
}
