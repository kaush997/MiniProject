import React from 'react';

const BiometricsButtons = () => {
  const handleScanFace = () => {
    // Handle Scan Face button click here
  };

  const handleSearch = () => {
    // Handle Upload photo button click here
  };

  const handleFingerprint = () => {
    // Handle Fingerprint button click here
  };

  return (
    <div className="biometrics-buttons">
  <button className="button button-scan-face" onClick={handleScanFace}>Scan Face</button>
  <button className="button button-upload-photo" onClick={handleSearch}>Upload photo</button>
  <button className="button button-fingerprint" onClick={handleFingerprint}>Fingerprint</button>
</div>

  );
};

export default BiometricsButtons;
