import React from 'react'
import './About.css'
import fishtank from '../assets/fishTank.jpg'


const About = () => {
  return (
    <div className="about">
      <div className="top1">
        <h1>About Us</h1>
      </div>
      <div className="facilities">
        <div className="card">
          <div className="img-cont">
            <img src={fishtank} alt="" />
          </div>
          <div className="content">
            <h2>Well Designed Interior</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti odio, accusamus, eum, rem soluta temporibus nisi perferendis corrupti illo dolores. Illum, unde officia. Maiores quas architecto hic sit laborum?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
