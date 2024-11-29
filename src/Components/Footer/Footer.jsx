import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt='' />
          <p>
            This section is a general introduction to the brand that owns this website, all information is provided by the business owner.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+84 935295411 - 385017172</li>
            <li>vinh.nguyentrandev@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'> Copyright {new Date().getFullYear()} @ kzg.com . All Right Reseverd</p>
    </div>
  )
}

export default Footer;
