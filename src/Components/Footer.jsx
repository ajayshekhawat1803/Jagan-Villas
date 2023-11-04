import React from 'react'
import './Footer.css'
import location from '../assets/icons/location.png'
import mail from '../assets/icons/gmail.png'
import whatsapp from '../assets/icons/whatsapp.png'
import call from '../assets/icons/Call.png'

const Footer = () => {
    return (
        <footer>
            <div className="box">
                <h1>Jagan Villas</h1>
                <p>Jagan Villas PG offers comfortable and affordable accommodation for students, working professionals, and individuals looking for a convenient place to stay. </p>
            </div>
            <div className="box">
                <h1>Facilities</h1>
                <span>Free Wifi</span>
                <span>Well Furnished Rooms</span>
                <span>Healthy Food</span>
                <span>Heigenic Environment</span>
                <span>AC Rooms</span>
            </div>
            <div className="box">
                <h1>Contact Us</h1>
                <div>
                    <img src={location} alt="not found" />
                    <a href="">C-23,Berwa Colony,Bajaj Nagar,Jaipur - 302015</a>
                </div>
                <div >
                    <img src={call} alt="not found" />
                    <div className='number-box'>
                        <a href="">+91 9460066518</a>
                        <a href="">+91 7597607102</a>
                    </div>
                </div>
                <div>
                    <img src={mail} alt="not found" />
                    <a href="">Jaganvillas@gmail.com</a>
                </div>
                <div>
                    <img src={whatsapp} alt="not found" />
                    <a href="https://wa.me//+917597607102">Jagan Villas</a>
                </div>
            </div>
            <div className="box">
                <h1>Location</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d398.468830981423!2d75.80127269047337!3d26.876584046615594!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697990413282!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </footer>
    )
}

export default Footer
