import React,{useState,useEffect} from 'react'
import './Header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
                console.log("hello");
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="logo-cont">
                <img src={logo} alt="Jagan Villas" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="ContactUs">Contact Us</Link></li>
                </ul>
            </nav>
            <button id="CallBtn" className='btn-primary'>Call Us</button>
        </header>
    )
}

export default Header
