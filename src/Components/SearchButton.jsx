import React from 'react';
import '../Components.css';

function SearchButton({ handleSearch }) {
  return (
   
    <button className="search-button" onClick={handleSearch}>
      Search
    </button>
   
  );
}

export default SearchButton;

