import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BrandLogo.css';

const BrandLogos = () => {
  return (
    <div className="brand-logos-container">
      <div className="brand-logos">
        <Link to="/asus" className="brand-logo">
          <img src="./image/logo/Asuslogo.png"  alt="Asus Logo" className="brand-logo-image" />
          <span className="brand-logo-text"></span>
        </Link>
        <Link to="/msi" className="brand-logo">
          <img src="./image/logo/Msilogo.png" alt="MSI Logo" className="brand-logo-image" />
          <span className="brand-logo-text"></span>
        </Link>
        <Link to="/lenovo" className="brand-logo">
          <img src="./image/logo/Lenovologo.png" alt="MSI Logo" className="brand-logo-image" />
          <span className="brand-logo-text"></span>
        </Link>
        <Link to="/hp" className="brand-logo">
          <img src="./image/logo/HPlogo.png" alt="MSI Logo" className="brand-logo-image" />
          <span className="brand-logo-text"></span>
        </Link>
        <Link to="/dell" className="brand-logo">
          <img src="./image/logo/Delllogo.png" alt="MSI Logo" className="brand-logo-image" />
          <span className="brand-logo-text"></span>
        </Link>
        
      </div>
    </div>
  );
};

export default BrandLogos;