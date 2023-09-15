import React from "react";
import '../Components.css';

function DownloadButton(){

const handleDownload = () => {
    // Implement download logic here
    const downloadLink = document.createElement('a');
    downloadLink.href = '/download PDF'; 
    downloadLink.download = 'Criminalpdf.svg'; 
    downloadLink.click();
  };

return(
    <button className="Download-button" onClick={handleDownload}>
          Download PDF 
        </button>
);

}

export default DownloadButton;