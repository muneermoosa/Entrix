import React from 'react'
import "./Footer.css"
import footer from "../../assets/img/footer.png"
import { Link } from 'react-router-dom'
function Footer() {
  const handleClick=()=>{
    window.scrollTo(0,0);
  }
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-wrapper'>

          <div className='footer-box'>
            <div className='logo'>
              <div className='logo-img'>
                <img src={footer}alt=''/>
             </div>
             <h2>Entrix Solution</h2>
            </div>
            <p>Embrance the future of innovation and technology with our cutting -edge touch bussiness solution </p>

          </div>
          <div className='footer-box'>
            <h4 className='footer_title'>Company</h4>
            <ul className='footer_links'>
              <li>

              <Link to='/Courses'onClick={handleClick}> Our Programs</Link>

              </li>
              <li>
              <Link to='services'onClick={handleClick}>Our plan </Link>
                </li>
                <li>
                  <a href='https://muneermoosa.github.io/SHOPPER/'>Become  a Member</a>
                
                </li>



            </ul>
            </div>

            <div className='footer-box'>
            <h4 className='footer_title'>Quick Links </h4>
            <ul className='footer_links'>
              <li>

              <Link to='/Aboutus'onClick={handleClick}>About Us</Link>

              </li>
              <li>
              <Link to='/Contact'onClick={handleClick}>Contact Us </Link>
                </li>
                <li>
                <Link to='/Support'onClick={handleClick}>Support Us</Link>
                
                </li>



            </ul>
            
            </div>
            <div className='footer-box'>
            
            </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer