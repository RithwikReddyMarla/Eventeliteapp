import React from 'react';
import '../styles/About.css';
export function About  () {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p className="about-intro">
          At <span className="company-name"><i>Eventelite</i></span>, we transform ordinary occasions into extraordinary memories. 
          With our client-centered approach, we listen first, then create events that perfectly reflect your vision.
        </p>
        <div className="about-section">
          <h2>Our Services</h2>
          <ul className="services-list">
            <li>Corporate Events & Conferences</li>
            <li>Social Gatherings & Celebrations</li>
            <li>Venue Selection & Management</li>
            <li>Full Event Planning & Coordination</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>Why Choose Us</h2>
          <ul className="choose-list">
            <li>Experienced team passionate about creating memorable events</li>
            <li>Personalized approach for each client's unique needs</li>
            <li>Attention to detail from concept to execution</li>
            <li>Seamless coordination so you can enjoy your event</li>
          </ul>
        </div>
        <p className="about-closing">Let's create something unforgettable together.</p>
        <p className="contact-cta">
          <i>Contact us today to begin planning your next exceptional event.</i>
        </p>
      </div>
    </div>
  );
};
