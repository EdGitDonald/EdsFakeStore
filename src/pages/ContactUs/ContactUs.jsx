import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div>
       <div className='contact-border'>
            <div className='contact-container'>
              <p>Contact Us</p>
              <input type="text" placeholder='First Name'/>
              <input type="text" placeholder='Last Name'/>
              <input type="text" placeholder='Write your message here'/>
              <button>Submit</button>
            </div>
       </div>
    </div>
  )
}

export default ContactUs