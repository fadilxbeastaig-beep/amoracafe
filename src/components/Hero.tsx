import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Welcome to Amora Cafe</h1>
      <p>Your favorite place to enjoy coffee.</p>
      <div className="button-container">
        <button className="hero-button">Learn More</button>
        <button className="hero-button">Order Now</button>
      </div>
    </div>
  );
};

export default Hero;