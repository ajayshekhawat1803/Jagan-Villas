import React from 'react'
import './ContactUs.css'
import office from '../assets/office.jpg'
import call from '../assets/icons/Call.png'
import location from '../assets/icons/location.png'
import gmail from '../assets/icons/gmail.png'
import whatsapp from '../assets/icons/whatsapp.png'



const ContactUs = () => {
  return (
    <div className="contact">
      <div className="top-part">
        <img src={office} alt="NOt AvailAble" />
        <h1>Contact Us</h1>
        {/* <span></span> */}
      </div>
      <div className="bottom-part">
        <div className="container">
          <form>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <textarea placeholder='Message'></textarea>
            <input type="submit" value="Submit" id='submitBtn'/>
          </form>
          <div className="support">
                <div className="item-box">
                  <img src={call} alt="Not Available" />
                  <div>
                  <h3>+91 9460066518</h3>
                  <h3>+91 7597607102</h3>
                  </div>
                </div>
                <div className="item-box">
                  <img src={location} alt="Not Available" />
                  <a href="" id='location'>C-23,Berwa Colony, Bajaj Nagar, Jaipur - 302015</a>
                </div>
                <div className="item-box">
                  <img src={gmail} alt="Not Available" />
                  <a href="">JaganVillas@gmail.com</a>
                </div>
                <div className="item-box">
                  <img src={whatsapp} alt="Not Available" />
                  <a href={`https://wa.me/+917597607102?text=${encodeURIComponent("Hello I want to have a seat in your PG.")}`}>Jagan Villas</a>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
