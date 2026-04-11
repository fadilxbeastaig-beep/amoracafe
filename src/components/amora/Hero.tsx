import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='logo-container'>
        <img src='/path/to/logo.png' alt='Logo' className='logo' />
        <div className='text-overlay'>
          <h1>AMORA</h1>
          <h2>SPECIALTY CAFÉ</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;