import React from 'react'
import './Contactus.css'

const ContactUs=() =>{
  return (
    <div className='container'>
        <div className='contact-us-container'>
            <h1>Contact Us</h1>
            <p>we'd love to hear from you. Please fill out the from below or reach out 
                to us using the contact details provided.
            </p>
            <form className='contact-from'>
                <div className='from-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text'id='name'name='name'
                    required/>
                    </div>
                    <div className='from-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email'id='email'name='email'
                    required/>
                   </div>
                   <div className='from-group'>
                    <label htmlFor='massage'>Massage:</label>
                    <textarea id='massage'name='massage' rows='5'
                    required></textarea>
                   </div>
                    <button type='Submit'
                     className='submit-btn'>Submit

                    </button>
                

            </form>

        </div>
    </div>
  )
}

export default ContactUs