import React from 'react';

export function SearchButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-row items-center shadow border border-gray-500 rounded py-2 px-3 bg-gray-600 text-gray-300 focus:outline-none hover:bg-gray-700 hover:border-gray-600"
    >
      <div className="flex items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>

        <span>Search anything</span>
      </div>

      <kbd className="bg-gray-700 text-gray-300 rounded ml-4 px-1 text-sm">
        Cmd K
      </kbd>
    </button>
  );
}
