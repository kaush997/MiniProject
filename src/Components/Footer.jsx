import React from 'react';
import '../Components.css';
import fingerprint from '../Assets/finger-print.png';
import facebook from '../Assets/facebook.png';
import twitter from '../Assets/twitter.png';
import tiktok from '../Assets/tiktok.png';
import instagram from '../Assets/instagram.png';
import youtube from '../Assets/youtube.png';


const Footer = () => {
  return (
    <footer className="footer ">
      <div className="column">
      <div className="icon">
          <img src={fingerprint} alt='finger-print' className='logo1' />
        
        <div className="text01">CIS</div></div>
        <div className="two-line-text">
          <div className="text02">Criminal Identification System</div>
          <div className="text02">Sri Lanka Police</div>
        </div>
        <div className="text03">2023@cis.police.lk All rights reserved.</div>
        
        </div>

      <div className="column">
        <div className="title">Quick Links</div>
        <div className="link">Home Page</div>
        <div className="link">About Us Page</div>
        <div className="link">News & Updates</div>
        <div className="link">FAQ and Help</div>
        <div className="link">Legal and Privacy</div>
      </div>
      <div className="column">
        <div className="title">Contact Us</div>
        <div className="textt"> Email</div>
        <div className="subpart">cis@slpolice.lk</div>
        <div className="text"> Phone Number</div>
        <div className="subpart">0711234567</div>
      </div>
      <div className="column">
      <div className="column">
  <div className="title">Social Media</div>
  <div className="social-link">
    <div className="social-icon">
      <img src={facebook} alt='Facebook' className='social-img' />
      <span>@sl_policemedia</span>
    </div>
  </div>
  <div className="social-link">
    <div className="social-icon">
      <img src={instagram} alt='Instagram' className='social-img' />
      <span>@sl_policemedia</span>
    </div>
  </div>
  <div className="social-link">
    <div className="social-icon">
      <img src={tiktok} alt='TikTok' className='social-img' />
      <span>@sl_policemedia</span>
    </div>
  </div>
  <div className="social-link">
    <div className="social-icon">
      <img src={twitter} alt='Twitter' className='social-img' />
      <span>@sl_policemedia</span>
    </div>
  </div>
  <div className="social-link">
    <div className="social-icon">
      <img src={youtube} alt='YouTube' className='social-img' />
      <span>@sl_policemedia</span>
    </div>
  </div>
</div>
</div>
  
    </footer>
  );
};

export default Footer;