import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
            <img src={assets.logo} alt="" />
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam nostrum et in eaque architecto blanditiis quam harum dolore explicabo laborum, tempora a quasi adipisci magni? Commodi eaque aut facere alias.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
            </div>
            </div>
            <div className='footer-content-center'>
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                  <li>+1-21-343-5336</li>
                  <li>contact@swiggy.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 (®) Swiggy.com - All Right Reserved </p>

    </div>
  )
}

export default Footer