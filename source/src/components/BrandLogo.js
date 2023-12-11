import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BrandLogo.css';

const BrandLogos = () => {
  return (
    <div className="brand-logos-container">
      <div className="brand-logos">
        <div className='boxlogo'>
        <Link to="/asus" className="brand-logo">
          <img src="./image/logo/Asuslogo.png" width="150px" height="75px" alt="Asus Logo" className="brand-logo-image" />
          <span className="brand-logo-text"></span>
        </Link></div>
        <div className='boxlogo'>
        <Link to="/msi" className="brand-logo">
          <img src="./image/logo/Msilogo.png" width="150px" height="75px" alt="MSI Logo" className="brand-logo-image" />
          <span className="brand-logo-text"></span>
        </Link></div>
        <div className='boxlogo'>
        <Link to="/lenovo" className="brand-logo">
          <img src="./image/logo/Lenovologo.png" width="200px" height="75px" alt="MSI Logo" className="brand-logo-image" />
          <span className="brand-logo-text"></span>
        </Link></div>
        <div className='boxlogo'>
        <Link to="/hp" className="brand-logo">
          <img src="./image/logo/HPlogo.png"width="150px" height="75px" alt="MSI Logo" className="brand-logo-image" />
          <span className="brand-logo-text"></span>
        </Link></div>
        <div className='boxlogo'>
        <Link to="/dell" className="brand-logo">
          <img src="./image/logo/Delllogo.png" width="150px" height="75px" alt="MSI Logo" className="brand-logo-image" />
          <span className="brand-logo-text"></span>
        </Link></div>
        
      </div>
    </div>
  );
};

export default BrandLogos;