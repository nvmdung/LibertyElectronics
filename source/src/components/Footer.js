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
        <div className='foot'>
        
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">This is a laptop-selling website that specializes in providing quality products from reputable brands in the market. With the aim of delivering a 
            convenient and trustworthy online shopping experience, the website offers a range of diverse laptops, catering to users' various needs.The website not only provides detailed information about each laptop but also allows users to view reviews, place orders, and even explore technical specifications and special offers. Additionally, the website regularly updates news, reviews, and product comparisons to help users gain an overview and select the most suitable product. </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6></h6>
            <ul class="footer-links">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="/contact">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by  
         <a href="#">LibertyElectronic</a>.
            </p>
          </div>

       
        </div>
      </div>
</footer>
        </div>
    );
}

export default Footer;