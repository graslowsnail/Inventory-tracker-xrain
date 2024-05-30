import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file for the search bar

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="custom-search-bar">
      <input
        type="text"
        placeholder="Search for a Company"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="custom-search-input"
      />
      <button onClick={handleSearch} className="custom-search-button">Search</button>
    </div>
  );
};

export default SearchBar;

