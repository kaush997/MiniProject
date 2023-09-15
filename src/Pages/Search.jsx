import React from 'react';
import '../Styles.css';
import imageSrc from '../Assets/Face recognition.gif';
import Investigation from '../Components/Investigation';
import Options from '../Components/Options';
import SearchTypeBox from '../Components/SearchTypeBox';
import SearchButton from '../Components/SearchButton';

function Search() {

  return (
    <div className="Search-container">
   <img src={imageSrc} alt="Face" className="FaceRecognition-image" />
   <div className='Search-content'>
    <div className='Search-investigation'>
    <Investigation/>
    </div>
    <div className='Search-options'>
    <Options/>
    </div>
    <div className='Search-searchtypebox'>
    <SearchTypeBox/>
    </div>
    <div className='Search-searchbutton'>
    <SearchButton/>
    </div>
   </div>
    </div>
  );
}

export default Search;
