import React, { useState } from 'react';

const SearchButton: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      try {
        // Perform the search action here
        const response = await fetch(`https://api.example.com/search?query=${searchTerm}`);
        const data = await response.json();
        console.log('Search Results:', data);
        // Process data or set state here as needed
      } catch (error) {
        console.error('Search error:', error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchButton;
