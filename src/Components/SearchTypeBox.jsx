import React from 'react';
import '../Components.css';

function SearchBox({ searchValue, onSearchValueChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="   Type NIC or Name here"
        className="search-input"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export default SearchBox;

