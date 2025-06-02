import React, { useState } from 'react';
import '../styles/Home.css';

const sliderImages = [
  "/images/openground_1.jpg",
  "/images/food_1.jpg",
  "/images/banquethall_1.jpg",
  "/images/wedding/wedding1.jpg",
];

const featuredImages = [
  { url: "/images/wedding/wedding1.jpg", name: "Kalyana Mandapam", price: "Auspicious Wedding Pavilion" },
  { url: "/images/sangeeth/sangeeth_1.jpg", name: "Floral Setup Fiesta", price: "Vibrant setup with florals and ribbons" },
  { url: "/images/birthday/bday5.jpg", name: "Princess Palace Party", price: "Royal Girl's Birthday" },
  { url: "/images/reception/rec12.jpg", name: "Crystal Dreams Mandap", price: "Sparkling Crystal Wonder Pavilion" },
  { url: "/images/haldi/haldi12.jpg", name: "Canary Yellow Ceremony", price: "Bright Yellow Ritual" },
  { url: "/images/sangeeth/san5.jpg", name: "Lantern Pathway", price: "Hanging lantern-lit walkway" },
];

export function Home(props) {
  const [current, setCurrent] = useState(0);
  const handleClick = (e, idx) => {
    if (e.target.innerText === "<") {
      setCurrent((current - 1 + sliderImages.length) % sliderImages.length);
    } else if (e.target.innerText === ">") {
      setCurrent((current + 1) % sliderImages.length);
    }
  };
  return (
    <div className=" home-container">
      <div className="banner-title">
        <h1>Hello <i>{props.name || "Guest"}</i> Welcome to Eventelite</h1>
        <p>Make your events memorable</p>
      </div>
      <div className="banner-slider">
        <button className="slider-arrow left" onClick={handleClick}>&lt;</button>
        <img src={sliderImages[current]} alt={`Banner ${current + 1}`} className="slider-image" />
        <button className="slider-arrow right" onClick={handleClick}>&gt;</button>
      </div>
      <div className="featured-section">
        <div className="featured-grid">
          {featuredImages.map((item, idx) => (
            <div className="featured-card" key={idx}>
              <img src={item.url} alt={item.name} />
              <div className="featured-caption">
                <div className="featured-name"><b>{item.name}</b></div>
                {item.price && <div className="featured-price">{item.price}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-sections">
        <div className="QuickLinks">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="Events-Typ">
          <h2>Types of Events</h2>
          <ul>
            <li>Weddings</li>
            <li>Birthday Parties</li>
            <li>Corporate Events</li>
            <li>Concerts</li>
            <li>Workshops</li>
          </ul>
        </div>
        <div className="Ct-us">
          <h2>Contact Us</h2>
          <p>Email: info@eventflite.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: 123, Main Street, Hyderabad</p>
        </div>
      </div>
    </div>
  );
}