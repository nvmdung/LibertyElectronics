// Footer.js
import React from 'react';
import '../css/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h1>Logo</h1>
                        <p>We have always been a supplier and distributor</p>
                        <p>of the world's best electronic components and devices</p>
                    </div>
                    <div className="footer-links">
                        <h2>Liên kết</h2>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/products">Product</a></li>
                            <li><a href="/contact">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h2>Connect</h2>
                        <ul>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Twitter</a></li>
                            <li><a href="/">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2023 Elecrtronic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;