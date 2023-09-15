import React, { useState } from 'react';
import '../Components.css';


function ReportBox() {
  const [selectedSearchOption, setSelectedSearchOption] = useState('Criminal ID');

  const [searchValue, setSearchValue] = useState('');

  const handleSearchOptionChange = (event) => {
    setSelectedSearchOption(event.target.value);
  };

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
 
    console.log(`Searching for ${selectedSearchOption}: ${searchValue}`);
  };

  return (
    <div >
      <div className="Report-options">
  <label>
  <input
    type="radio"
    value="Criminal ID"
    checked={selectedSearchOption === 'Criminal ID'}
    onChange={handleSearchOptionChange}
  />
  Criminal ID
</label>
<p className='ab'>If you need included all crimes click here</p>

<label>
  <input
    type="radio"
    value="Crime ID"
    checked={selectedSearchOption === 'Crime ID'}
    onChange={handleSearchOptionChange}
  />
  Crime ID
</label>
<p className='ab'>If you need a report for one crime click here</p>

</div>

      <div className="Request-box">
        <input
          type="text"
          placeholder="  Type ID here"
          className="Request-input"
          value={searchValue}
          onChange={handleSearchValueChange}
        />
        </div>
        <button className="Request-button" onClick={handleSearch}>
          <a href="/ReportResponse">Send Request</a>
        </button>

    </div>
  );
}

export default ReportBox;