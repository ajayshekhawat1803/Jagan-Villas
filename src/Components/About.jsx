import React from 'react'
import './About.css'
import fishtank from '../assets/fishTank.jpg'
import frog from '../assets/frog.jpg'
import hall from '../assets/hall.jpg'

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
            <h2>Space Beautifiers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti odio, accusamus, eum, rem soluta temporibus nisi perferendis corrupti illo dolores. Illum, unde officia. Maiores quas architecto hic sit laborum?</p>
          </div>
        </div>
        <div className="card">
          <div className="img-cont">
            <img src={hall} alt="" />
          </div>
          <div className="content">
            <h2>Well Designed Interior</h2>
            <p>Experience the magic of well-crafted interiors, where every room is a masterpiece. Explore diverse styles, let our experts inspire you, and transform your home into a haven of style and comfort.</p>
          </div>
        </div>
        <div className="card">
          <div className="img-cont">
            <img src={frog} alt="" />
          </div>
          <div className="content">
            <h2>Artistic Home Decor</h2>
            <p>Enhance your living space with our artistic home decor collection. From captivating wall art to unique sculptures, infuse creativity into your home and make every room a masterpiece of design and style.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
