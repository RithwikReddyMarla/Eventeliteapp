import React from 'react';
import '../styles/Wedding.css';

const weddingGalleries = [
  { url: "/images/wedding/wedding1.jpg", name: "Kalyana Mandapam", price: " Auspicious Wedding Pavilion" },
  { url: "/images/wedding/wedding2.jpg", name: "Kanyadaan Mandapam",price:"Blessed Giving Pavilion"},
  { url: "/images/wedding/wedding3.jpg", name: "Pushpa Mandapam ",price:"Floral Paradise Pavilion"},
  { url: "/images/wedding/wedding4.jpg", name: "Brahma Muhurta Mandap",price:"Divine Hour Pavilion" },
  { url: "/images/wedding/wedding6.jpg", name: " Genda Phool Mandap",price:" Marigold Splendor Pavilion" },
  {url:"/images/wedding/wedding11.jpg", name:"Sumangali Mandap",price:" Prosperity Blessing Pavilion"},
  {url: "/images/wedding/wedding5.jpg", name: "Mangalya Mandapam",price:"Sacred Union Pavilion" },
  {url:"/images/wedding/wedding7.jpg", name: "Panchavarni Mandap",price:"Five Colors Harmony Pavilion"},
  {url:"/images/wedding/wedding8.jpg", name: "Rajnigandha Mandapam ",price:" Tuberose Elegance Pavilion"},
  {url:"/images/wedding/wedding9.jpg", name: "Agni Sakshi Mandap",price:"Fire Witness Pavilion"},
  {url:"/images/wedding/wedding10.jpg", name: "Saptapadi Mandap ",price:" Seven Sacred Steps Pavilion"},
  {url:"/images/wedding/wedding12.jpg",name:"Chandramallika Mandap ",price:"Chrysanthemum Garden Pavilion"},
  {url:"images/wedding/wedding13.jpg",name:"Swagat Dwar" ,price:"Welcome Gateway"},
  {url:"/images/wedding/wedding14.jpg",name:"Mangalya Dwar",price:"Blessed Gateway"},
  {url:"/images/wedding/wedding16.jpg",name:"Pushpa Torana",price:"Floral Arch Gateway"},
  {url:"/images/wedding/image_1.jpg",name:"Kalyana Dwar",price:"Wedding Gateway"},
];

export function Wedding() {
  return (
    <div className="wedding-container">
        <div className="heading-wed">
            <h1>Wedding Ceremony</h1>
            <p>A sacred union surrounded by love, rituals, and timeless traditions</p>
        </div>
        <div className="about-wedding">
            <h2>About wedding</h2>
            <p>The wedding is the most significant event where two souls unite in a sacred bond. Whether traditional or contemporary, our wedding ceremony arrangements are tailored to reflect cultural values with a touch of elegance.</p><br/>
            <p>We provide mandap setups, floral decor, seating for guests, traditional entrances, live streaming services, and coordination for all rituals to ensure a seamless and memorable experience.</p>
        </div> 
      <h1>Our Wedding setups</h1>
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