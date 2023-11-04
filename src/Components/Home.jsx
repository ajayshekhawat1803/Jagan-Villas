import React, { useEffect, useState } from 'react'
import './Home.css'
import video from '../assets/video.mp4'
import fountain from '../assets/fountain.jpeg'
import bedroom from '../assets/bedroom.jpeg'
import garden from '../assets/garden.jpeg'
// Images Importing
// import alooParatha from "../assets/Food Images/alooParatha.jpg"
// import mixVeg from "../assets/Food Images/mixVeg.jpg"
// import besanGatta from "../assets/Food Images/besanGatta.webp"
// import whatsapp from '../assets/icons/whatsapp.png'
import defaultImg from "../assets/Food Images/default.jpg"
import alooParatha from "../assets/Food Images/alooParatha.jpg"
import mixVeg from "../assets/Food Images/mix veg.webp"
import besanGatta from "../assets/Food Images/besan Gatta.jpg"
import pyajParatha from "../assets/Food Images/pyaj paratha.jpg"
import PyajTamater from "../assets/Food Images/pyaj tamater.jpg"
import Vegkofte from "../assets/Food Images/Veg-Kofta.webp"
import toastedsandwich from "../assets/Food Images/toasted sandwich.jpg"
import Allomater from "../assets/Food Images/Aloo matar.webp"
import kadipacoda from "../assets/Food Images/kadi pacoda.jpg"
import SimplePratha from "../assets/Food Images/Simple paratha.jpg"
import Malaipyaj from "../assets/Food Images/Malai Pyaj.jpg"
import DumAloo from "../assets/Food Images/dum-aloo.jpg"
import Maggie from "../assets/Food Images/maggie.jpg"
import Aloojeera from "../assets/Food Images/Aloo jeera.jpg"
import MassalaChole from "../assets/Food Images/masala chole.JPG"
import Methiparatha from "../assets/Food Images/methi paratha.jpg"
import Sevtamater from "../assets/Food Images/sev tamatar.png"
import KadaiPaneer from "../assets/Food Images/Kadhai-Paneer.jpg"
import Kachorijalebisamosa from "../assets/Food Images/kachori jalebi samosa.png"
import Aloopyaj from "../assets/Food Images/aloo pyaj.jpg"
import Dalmakhni from "../assets/Food Images/dal makhni.jpg"
import whatsapp from "../assets/icons/whatsapp.png"

const Home = () => {
  const [timeDisabled, setTimeDisabled] = useState(true)
  const [day, setDay] = useState("")
  const [time, setTime] = useState("")
  const [IMGSRC, SetIMGSRC] = useState("")
  const [dishName, SetdishName] = useState("")

  const FoodImgSrc = [
    // monday
    {
      breakfast: {
        img: alooParatha,
        name: "Aloo Paratha"
      },
      lunch: {
        img: mixVeg,
        name: "Mix Veg"
      },
      dinner: {
        img: besanGatta,
        name: "Besan Gatta"
      }
    }
    ,
    // tuesday
    {
      breakfast: {
        img: pyajParatha,
        name: "Pyaj Paratha"
      },
      lunch: {
        img: PyajTamater,
        name: "Pyaj Tamater"
      },
      dinner: {
        img: Vegkofte,
        name: "Vej Kofte"
      }
    },
    // wednesday
    {
      breakfast: {
        img: toastedsandwich,
        name: "Toasted sandwich"
      },
      lunch: {
        img: Allomater,
        name: "Aloo Matar"
      },
      dinner: {
        img: kadipacoda,
        name: "kadi Pacoda"
      }
    },
    // thrusday
    {
      breakfast: {
        img: SimplePratha,
        name: "Paratha"
      },
      lunch: {
        img: Malaipyaj,
        name: "Malai Pyaj"
      },
      dinner: {
        img: DumAloo,
        name: "Dum Aloo "
      }
    },
    // friday
    {
      breakfast: {
        img: Maggie,
        name: "Maggie"
      },
      lunch: {
        img: Aloojeera,
        name: "Aloo jeera"
      },
      dinner: {
        img: MassalaChole,
        name: "Massala Chole "
      }
    },
    // saturday
    {
      breakfast: {
        img: Methiparatha,
        name: "Methi Paratha"
      },
      lunch: {
        img: Sevtamater,
        name: "Sev Tamater"
      },
      dinner: {
        img: KadaiPaneer,
        name: "Kadai Paneer"
      }
    },
    // sunday
    {
      breakfast: {
        img: Kachorijalebisamosa,
        name: "Kachori-Jalebi-Samosa"
      },
      lunch: {
        img: Aloopyaj,
        name: "Aloo Pyaj"
      },
      dinner: {
        img: Dalmakhni,
        name: "Dal makhni"
      }
    },

  ]
  useEffect(() => {
    if (day) {
      setTimeDisabled(false)
    }
    else {
      setTimeDisabled(true)
    }
  }, [day])

  useEffect(() => {
    switch (day) {
      case "mon":
        switch (time) {
          case "breakfast":
            SetIMGSRC(FoodImgSrc[0].breakfast.img)
            SetdishName(FoodImgSrc[0].breakfast.name)
            break;
          case "lunch":
            SetIMGSRC(FoodImgSrc[0].lunch.img)
            SetdishName(FoodImgSrc[0].lunch.name)
            break;
          case "dinner":
            SetIMGSRC(FoodImgSrc[0].dinner.img)
            SetdishName(FoodImgSrc[0].dinner.name)
            break;
          default:
            break;
        }
        break;
      case "tue":

        switch (time) {
          case "breakfast":
            SetIMGSRC(FoodImgSrc[1].breakfast.img)
            SetdishName(FoodImgSrc[1].breakfast.name)
            break;
          case "lunch":
            SetIMGSRC(FoodImgSrc[1].lunch.img)
            SetdishName(FoodImgSrc[1].lunch.name)
            break;
          case "dinner":
            SetIMGSRC(FoodImgSrc[1].dinner.img)
            SetdishName(FoodImgSrc[1].dinner.name)
            break;
          default:
            break;
        }
        break;
      case "wed":

        switch (time) {
          case "breakfast":
            SetIMGSRC(FoodImgSrc[2].breakfast.img)
            SetdishName(FoodImgSrc[2].breakfast.name)
            break;
          case "lunch":
            SetIMGSRC(FoodImgSrc[2].lunch.img)
            SetdishName(FoodImgSrc[2].lunch.name)
            break;
          case "dinner":
            SetIMGSRC(FoodImgSrc[2].dinner.img)
            SetdishName(FoodImgSrc[2].dinner.name)
            break;
          default:
            break;
        }
        break;
      case "thru":
        switch (time) {
          case "breakfast":
            SetIMGSRC(FoodImgSrc[3].breakfast.img)
            SetdishName(FoodImgSrc[3].breakfast.name)
            break;
          case "lunch":
            SetIMGSRC(FoodImgSrc[3].lunch.img)
            SetdishName(FoodImgSrc[3].lunch.name)
            break;
          case "dinner":
            SetIMGSRC(FoodImgSrc[3].dinner.img)
            SetdishName(FoodImgSrc[3].dinner.name)
            break;
          default:
            break;
        }
        break;
      case "fri":

        switch (time) {
          case "breakfast":
            SetIMGSRC(FoodImgSrc[4].breakfast.img)
            SetdishName(FoodImgSrc[4].breakfast.name)
            break;
          case "lunch":
            SetIMGSRC(FoodImgSrc[4].lunch.img)
            SetdishName(FoodImgSrc[4].lunch.name)
            break;
          case "dinner":
            SetIMGSRC(FoodImgSrc[4].dinner.img)
            SetdishName(FoodImgSrc[4].dinner.name)
            break;
          default:
            break;
        }
        break;
      case "sat":

        switch (time) {
          case "breakfast":
            SetIMGSRC(FoodImgSrc[5].breakfast.img)
            SetdishName(FoodImgSrc[5].breakfast.name)
            break;
          case "lunch":
            SetIMGSRC(FoodImgSrc[5].lunch.img)
            SetdishName(FoodImgSrc[5].lunch.name)
            break;
          case "dinner":
            SetIMGSRC(FoodImgSrc[5].dinner.img)
            SetdishName(FoodImgSrc[5].dinner.name)
            break;
          default:
            break;
        }
        break;
      case "sun":
        switch (time) {
          case "breakfast":
            SetIMGSRC(FoodImgSrc[6].breakfast.img)
            SetdishName(FoodImgSrc[6].breakfast.name)
            break;
          case "lunch":
            SetIMGSRC(FoodImgSrc[6].lunch.img)
            SetdishName(FoodImgSrc[6].lunch.name)
            break;
          case "dinner":
            SetIMGSRC(FoodImgSrc[6].dinner.img)
            SetdishName(FoodImgSrc[6].dinner.name)
            break;
          default:
            break;
        }
        break;

      default:
        SetIMGSRC(defaultImg)
        SetdishName("Select Meal From options")
        break;
    }
  }, [time, day])

  return (
    <div className="home">
      <div id="page1">
        <video autoPlay loop muted src={video}></video>
        <h1>Welcome to Your  <br /> Comfortable Heaven</h1>
        <p>Step into a world of quality living. Our Boys PG is designed to cater to your needs, ensuring you have the time and space to focus on your goals. Choose us for a safe, secure, and comfortable environment that feels just like home.</p>
        <div className="btn-cont">
          <a className=' btn' id='viewmore' href="#page2">View More</a>
          {/* <button className='btn-brown btn'>View More</button>
          <button className='btn'>Call Us</button> */}
        </div>
      </div>
      <div id="page2">
        <h1>A Space to Grow, A Place to Call Home</h1>
        <p><span>Jagan Villas &nbsp;</span> offers spacious rooms, nutritious meals, high-speed Wi-Fi, 24/7 security, and inviting common areas. Your perfect blend of convenience and community.</p>
        <div className="feature-cont">

          <div className="feature-box">
            <div className="img-cont">
              <img src={garden} alt="Failed to Load Image" />
            </div>
            <h2>Garden Bistro</h2>
            <p>An area in open sky, where you can sit and enjoy Natur's Beauty</p>
          </div>

          <div className="feature-box">
            <div className="img-cont">
              <img src={fountain} alt="Failed to Load Image" />
            </div>
            <h2>Dining Lounge</h2>
            <p>Enjoy delicious meals in our cozy dining area, where every dish is a delightful experience of taste and atmosphere</p>
          </div>

          <div className="feature-box">
            <div className="img-cont">
              <img src={bedroom} alt="Failed to Load Image" />
            </div>
            <h2>Furnished Bedroom</h2>
            <p>Experience peaceful relaxation in our well-designed bedrooms, where style and comfort combine for a good night's rest</p>
          </div>

        </div>
      </div>
      <div id="page3">
        <img src={garden} alt="Not Loaded" />
        <div className="top-part">
          <div className="line"></div>
          <div>
            <h3>Food</h3>
            <h4>Check Menu for our PG</h4>
          </div>
        </div>
        <div className="bottom-part">
          <div>
            <select id="day" value={day} onChange={(e) => setDay(e.target.value)}>
              <option value="">Not Selected</option>
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thru">Thrusday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
            </select>
            <select id="time" disabled={timeDisabled} value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Not Selected</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>
          <div className="img-cont">
            <img src={IMGSRC} alt="NOt Available" />
            <h1 id='dishName'>{dishName}</h1>
          </div>
        </div>
      </div>
      <a href={`https://wa.me/+917597607102?text=${encodeURIComponent("Hello I want to have a seat in your PG.")}`} id='whatsappIcon'><img src={whatsapp} alt="Chat" /></a>
    </div>
  )
}

export default Home