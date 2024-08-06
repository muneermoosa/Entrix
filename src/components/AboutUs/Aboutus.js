import React from 'react'
import './Aboutus.css'
import mm from '../../assets/img/mm.jpg'

const Aboutus=()=> {
  return (
    <div className='container'>
    <div className='about-us-container'>
    <div className='team-members'>
    <h2>Our Team</h2>
    <div className='member-card'>
        <img className='member-image'src={mm} alt='MM'/>
        <h3 className='member-name'>Muneer Moosa</h3>
        <p className='Member-role'>Co-Founder</p>
    </div>
       </div>

       <div className='about-us-description'>
        <h1 className='about-us-heading'>Aboutus</h1>
        <p> with passion for empowering learners of all ages,our mission
          is to make education accessible,engaging,and personalized
          throgh our cutting-edge educational technology platform.
        </p>

       </div>
       
    </div>

    </div>
  )
}

export default Aboutus