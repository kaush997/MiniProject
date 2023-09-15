import React from "react";
import ScanBox from '../Components/ScanBox';
import Investigation from "../Components/Investigation";
import Options from "../Components/Options";
import BiometricsButtons from '../Components/BiometricsButtons';
import SearchButton from "../Components/SearchButton";
import '../Styles.css';

function SearchBiometrics() {

  return (
    <div className="SearchBiometrics-container">
    <div className="Biometrics-scanbox">
      <ScanBox/>
    </div>
    <div className='Biometrics-investigation'>
    <Investigation/>
    </div>
    <div className='Biometrics-options'>
    <Options/>
    </div>
    <div className='Biometrics-buttons'>
    <BiometricsButtons/>
    </div>
    <div className='Biometrics-searchbutton'>
    <SearchButton/>
    </div>
   </div>
    
  );
}

export default SearchBiometrics;
