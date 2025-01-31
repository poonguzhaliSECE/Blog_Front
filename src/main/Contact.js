import React from 'react';
import '../css/Contact.css';

const Contact = () => {
  const phoneNumber = '9043296496';  

  return (
    <div className="contact-page">
      <h2>Contact Us ☎</h2>
      <p>If you want to contact us, click the button below to make a chat:</p>
      <a href={`tel:${phoneNumber}`} className="contact-button">
        Contactr 📞
      </a>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmCWRgS0nNmiaSuXaiOgbpGc-gnXfP3xstQ&s" alt='img loading'></img> */}
    
    </div>
   
  );
}

export default Contact;
