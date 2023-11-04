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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8459297515546!2d75.79663807882459!3d26.87663570150353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5abd4831d49%3A0x2914be65d111c1f8!2sJagan%20Villas!5e0!3m2!1sen!2sin!4v1699093720160!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </footer>
    )
}

export default Footer
