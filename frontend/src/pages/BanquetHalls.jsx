import React, { useState } from 'react';
import '../styles/Wedding.css'; 

const banquetHalls = [
  { url: "/images/banguetHalls/hall_1.jpg", name: "Grand Banquet Hall", details: { location: "Downtown City Center", capacity: "500 guests", price: "₹1,50,000" } },
  { url: "/images/banguetHalls/hall2.jpg", name: "Royal Banquet", details: { location: "Uptown Luxury Area", capacity: "700 guests", price: "₹1,00,000" } },
  { url: "/images/banguetHalls/hall3.jpg", name: "Elegant Banquet", details: { location: "Suburban Green Zone", capacity: "300 guests", price: "₹1,20,000" } },
  { url: "/images/banguetHalls/hall4.jpg", name: "Classic Banquet", details: { location: "Historic District", capacity: "600 guests", price: "₹2,00,000" } },
  { url: "/images/banguetHalls/hall5.jpg", name: "Modern Banquet", details: { location: "City Skyline View", capacity: "800 guests", price: "₹80,000" } },
  { url: "/images/banguetHalls/hall6.jpg", name: "Charming Banquet", details: { location: "Countryside Retreat", capacity: "400 guests", price: "₹90,000" } },
  { url: "/images/banguetHalls/hall7.jpg", name: "Luxury Banquet", details: { location: "Beachfront Paradise", capacity: "1000 guests", price: "₹2,00,000" } },
  { url: "/images/banguetHalls/hall8.jpg", name: "Intimate Banquet", details: { location: "Cozy Neighborhood", capacity: "200 guests", price: "1,,000" } },
];
export function BanquetHalls() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const toggleDetails = (idx) => {
    if (selectedIndex === idx) {
      setSelectedIndex(null); 
    } else {
      setSelectedIndex(idx);
    }
  };
  return (
    <div className="wedding-container">
      <div className="heading-wed">
        <h1>Banquet Halls</h1>
        <p>Discover our premium banquet halls for your special occasions.</p>
      </div>
      <div className="wedding-grid">
        {banquetHalls.map((hall, idx) => (
          <div className="wedding-card" key={idx}>
            <img src={hall.url} alt={hall.name} />
            <div className="wedding-caption">
              <div className="wedding-name">
                <b>{hall.name}</b>
              </div>
              <button
                className="details-btn"
                onClick={() => toggleDetails(idx)}
              >
                {selectedIndex === idx ? "Hide Details" : "View Details"}
              </button>
              {selectedIndex === idx && (
                <div className="hall-details">
                  <p><b>Location:</b> {hall.details.location}</p>
                  <p><b>Capacity:</b> {hall.details.capacity}</p>
                  <p><b>Price:</b> {hall.details.price}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}