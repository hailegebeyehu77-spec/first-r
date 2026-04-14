import React from 'react';

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>Explore our exquisite offerings that blend relaxation and rejuvenation.</p>
      <div className="menu-items">
        <div className="menu-item">
          <h3>Traditional Moroccan Hammam</h3>
          <p>Experience the authentic cleansing ritual.</p>
        </div>
        <div className="menu-item">
          <h3>Herbal Sauna</h3>
          <p>Relax with our herbal-infused sauna sessions.</p>
        </div>
        <div className="menu-item">
          <h3>Massage Therapy</h3>
          <p>Indulge in our range of therapeutic massages.</p>
        </div>
        <div className="menu-item">
          <h3>Facial Treatments</h3>
          <p>Revitalize your skin with our facial services.</p>
        </div>
      </div>
      <img src="path/to/your/image.jpg" alt="Spa and Sauna" className="menu-image" />
    </div>
  );
};

export default Menu;