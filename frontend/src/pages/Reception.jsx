import React from 'react';
import '../styles/Wedding.css';

const weddingGalleries = [
  { url: "/images/reception/rec4.jpg", name: "Pearl White Mandap",price:"Pristine Sophisticated Ceremony Pavilion"},
  { url: "/images/reception/rec6.jpg", name: "Golden Elegance Mandap",price:"Luxurious Golden Celebration Pavilion"},
  { url: "/images/reception/rec11.jpg", name: "Rose Garden Mandap",price:"Romantic Floral Paradise Pavilion"},
  { url: "/images/reception/rec12.jpg", name: "Crystal Dreams Mandap",price:"Sparkling Crystal Wonder Pavilion "},
  { url: "/images/reception/rec1.jpg", name: "Ivory Grace Mandap ",price:"Pure Elegance Ceremony Pavilion "},
  {url:"/images/reception/rec5.jpg", name: "Fairy Light Mandap",price:"Magical Twinkling Celebration Pavilion"},
  {url:"/images/reception/rec3.jpg", name: "Sunset Glow Mandap",price:"Warm Evening Celebration Pavilion"},
  { url: "/images/reception/rec2.jpg", name: "Royal Blue Mandap",price:"Majestic Royal Celebration Pavilion "},
  {url:"/images/reception/rec7.jpg", name: "Rustic Bloom Mandap",price:"Natural Country Style Pavilion"},
  {url:"/images/reception/rec8.jpg", name: "Lavender Fields Mandap",price:"Serene Purple Dream Pavilion"},
  {url:"/images/reception/rec9.jpg",name:"Coral Reef Mandap",price:"Vibrant Ocean Inspired Pavilion"},
  {url:"/images/reception/Royalentry_1.jpg",name:"Tropical Paradise Mandap",price:"Exotic Floral Celebration Pavilion"},
];

export function Reception() {
  return (
    <div className="wedding-container">
        <div className="heading-wed">
            <h1>Reception</h1>
            <p>Elegance, Glamour, and a Grand Finale</p>
        </div>
        <div className="about-wedding">
            <h2>About Reception</h2>
            <p>The reception is a formal celebration where the couple is introduced as partners for life. It’s a night of heartfelt speeches, entertainment, and celebration.</p><br/>
            <p>Our receptions feature designer stage decor, curated menus, ambient lighting, guest hospitality, and personalized entry setups to ensure the event reflects your style and story.</p>
        </div> 
      <h1>Our Reception setups</h1>
      <div className="wedding-grid">
        {weddingGalleries.map((item, idx) => (
          <div className="wedding-card" key={idx}>
            <img src={item.url} alt={item.name} />
            <div className="wedding-caption">
              <div className="wedding-name"><b>{item.name}</b></div>
              {item.price && <div className="wedding-price">{item.price}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}