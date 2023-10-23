import React, { useEffect, useState } from 'react'
import './Home.css'
import video from '../assets/video.mp4'
import fountain from '../assets/fountain.jpeg'
import bedroom from '../assets/bedroom.jpeg'
import garden from '../assets/garden.jpeg'
// Images Importing
import alooParatha from "../assets/Food Images/alooParatha.jpg"
import mixVeg from "../assets/Food Images/mixVeg.jpg"
import besanGatta from "../assets/Food Images/besanGatta.webp"
import defaultImg from "../assets/Food Images/default.png"

const Home = () => {
  const [timeDisabled, setTimeDisabled] = useState(true)
  const [day, setDay] = useState("")
  const [time, setTime] = useState("")
  const [IMGSRC, SetIMGSRC] = useState("")
  const [dishName, SetdishName] = useState("")
  const FoodImgSrc = [
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

      default:
        SetIMGSRC(defaultImg)
        SetdishName("👈👈👈")
        break;
    }
  }, [time])

  return (
    <div className="home">
      <div id="page1">
        <video autoPlay loop muted src={video}></video>
        <h1>Welcome to Your  <br /> Comfortable Heaven</h1>
        <p>Step into a world of quality living. Our Boys PG is designed to cater to your needs, ensuring you have the time and space to focus on your goals. Choose us for a safe, secure, and comfortable environment that feels just like home.</p>
        <div className="btn-cont">
          <button className='btn-brown btn'>View More</button>
          <button className='btn'>Call Us</button>
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
    </div>
  )
}

export default Home