// Footer.js
import React from 'react';
import { Redirect } from 'react-router-dom';
import '../css/Footer.css'

function Footer() {
    const redirectToGmail = () => {
        const email = encodeURIComponent('lethanhntrung28042000@gmail.com'); // Thay đổi thành địa chỉ email của bạn
        window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    };
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h1></h1>
                        <p>We have always been a supplier and distributor</p>
                        <p>of the world's best electronic components and devices</p>
                    </div>
                    <div className="footer-links">
                        <h2>Liên kết</h2>
                        <ul>
                            <li><a href="/">Connect</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/products">Product</a></li>
                            <li><a href="/contact">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h2>Home Page</h2>
                        <ul>
                        <li><a href="#" onClick={redirectToGmail}>Gmail</a></li>
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