import React, { useState } from 'react';
import '../Components.css';

function Options() {
  const [selectedSearchOption, setSelectedSearchOption] = useState('Bio Data');

  const handleSearchOptionChange = (event) => {
    setSelectedSearchOption(event.target.value);
  };

  return (
    <div className="search-options">
      <label>
        <input
          type="radio"
          value="Bio Data"
          checked={selectedSearchOption === 'Bio Data'}
          onChange={handleSearchOptionChange}
        />
        <a href="/Search">Bio Data</a>  
      </label>
      <label>
        <input
          type="radio"
          value="Biometrics"
          checked={selectedSearchOption === 'Biometrics'}
          onChange={handleSearchOptionChange}
        />
        <a href="/SearchBiometrics">Biometrics</a>
      </label>
    </div>
  );
}

export default Options;

