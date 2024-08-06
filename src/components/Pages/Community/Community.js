import React from 'react'
import "./Community.css"
import tc from "../../../assets/img/tc.png"

function Community() {
    const handleClick =()=>{
        window.open('https://chat.whatsapp.com/G7Rzd2elf1w5rSCSmW3pZv')
    }
  return (
    <div className='containar'>
        <div className='start-wrapper'>
            <div className='start-img'>
                <img src={tc}alt=''/>

            </div>
            <div className='start-content'>
                <h2 className='section-title'>Join our Free Tech Community</h2>  
                <p>Unlock the power of knowlodge  and innovation joining our vibrant and free whatsApp  tech community </p>

            
            <button className='register-btn'onClick={handleClick}>Join Now </button>
            </div>
        </div>

    </div>
  )
}

export default Community