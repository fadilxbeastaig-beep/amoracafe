import React from 'react';

const Hero = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="path-to-logo.png" alt="Logo" style={{ marginRight: '20px' }} />
      <div>
        <h1 style={{ margin: 0 }}>AMORA</h1>
        <h2 style={{ margin: 0, transform: 'rotate(90deg)' }}>SPECIALTY CAFE</h2>
      </div>
    </div>
  );
};

export default Hero;