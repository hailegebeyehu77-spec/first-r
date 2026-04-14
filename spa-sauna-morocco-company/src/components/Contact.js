import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>Phone: 0911582436</p>
      <p>Address: Hyat, Addis Ababa</p>
      <div className="map-container">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509874!2d144.9537353153165!3d-37.81627997975169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0e1b1f%3A0x5045675218ceed0!2sHyat%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1616161616161!5m2!1sen!2set"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;