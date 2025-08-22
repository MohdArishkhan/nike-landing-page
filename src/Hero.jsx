import React from 'react'
import './index.css';
import logo1 from '../Logos/amazon.png';
import logo2 from '../Logos/flipkart.png';
import logo3 from '../Logos/shoe_image.png';
function Hero() {
  return (
    <div className='hero'>
      <div className='heading'>
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='hero-buttons'>
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="available">
          <p>Also available on</p>
        </div>
        <div className="shop-img">
          <img src={logo1} alt="Logo" />
          <img src={logo2} alt="Logo" />
        </div>
      </div>
      <div className="shoe">
        <img src={logo3} alt="Logo" />
      </div>
    </div>
  )
}

export default Hero