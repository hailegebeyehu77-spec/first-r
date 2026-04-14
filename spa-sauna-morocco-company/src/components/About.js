import React from 'react';
import spaImage from '../assets/spa-image.jpg'; // Make sure to replace with the actual path to your image

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Welcome to our Spa, Sauna, and Morocco Work and Maintenance Company! 
        We are dedicated to providing you with the ultimate relaxation experience 
        through our luxurious spa services and sauna facilities. Our team of 
        professionals is committed to ensuring your satisfaction and well-being.
      </p>
      <img src={spaImage} alt="Spa and Sauna" />
    </div>
  );
};

export default About;