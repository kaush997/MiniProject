import React from 'react';
import '../Styles.css';
import imageSrc from '../Assets/welcome_img.png';

function Home() {
  const containerStyle = {
    backgroundImage: `url(${imageSrc})`,  
    backgroundSize: 'cover',              
    backgroundPosition: 'center',        
    backgroundRepeat: 'no-repeat',      
    height: '100vh',                      
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',  
    
  };
  return (
    <div style={containerStyle} className="home-container">
      <div className='welcome-heading'>
      <h1>Welcome</h1>
      </div>
      <div className="sub-heading">
        <p>To Criminal Identification System</p>
      </div>
      <div className='sub-heading2'>
        <p>Sri Lanka Police</p>
      </div>
    </div>
  );
}

export default Home;
