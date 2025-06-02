import React, { useState } from 'react';
import '../styles/Galleries.css';

export function Galleries() {
    const [visibleImages, setVisibleImages] = useState(12); 

    const imagegallery = [
  { url: "/images/haldi/haldi1.jpg", name: "Haldi Rangoli Mandap",price:"Turmeric Art Pavilio"},
  {url:"/images/sangeeth/san12.jpg", name: "Royal Light Steps",price:"Regal steps with pillar lighting"},
  {url:"/images/wedding/wedding8.jpg", name: "Rajnigandha Mandapam ",price:" Tuberose Elegance Pavilion"},
  {url:"/images/reception/rec5.jpg", name: "Fairy Light Mandap",price:"Magical Twinkling Celebration Pavilion"},
  { url: "/images/haldi/haldi2.jpg", name: "Haridra Ganesh Mandap",price:"Turmeric Ganesha Pavilion" },
  { url: "/images/birthday/bday6.jpg", name: "Golden Years Celebration",price:"50+ Birthday Party"},
  { url: "/images/sangeeth/san6.jpg", name: "Enchanted Garden Canopy",price:"Fairy lights under green cover" },
  { url: "/images/reception/rec12.jpg", name: "Crystal Dreams Mandap",price:"Sparkling Crystal Wonder Pavilion "},
  {url:"/images/wedding/wedding9.jpg", name: "Agni Sakshi Mandap",price:"Fire Witness Pavilion"},
  {url:"/images/birthday/bday8.jpg", name: "Balloon Voyage Bliss", price: "Balloon Theme Birthday"},
  {url: "/images/sangeeth/san7.jpg", name: "Mirrored Aisle Glamour",price:"Reflective aisle with florals"},
  {url:"/images/reception/rec3.jpg", name: "Sunset Glow Mandap",price:"Warm Evening Celebration Pavilion"},
  {url: "/images/wedding/wedding5.jpg", name: "Mangalya Mandapam",price:"Sacred Union Pavilion" },
  {url:"/images/reception/rec8.jpg", name: "Lavender Fields Mandap",price:"Serene Purple Dream Pavilion"},
  { url: "/images/birthday/bday5.jpg", name: " Princess Palace Party",price:"Royal Girl's Birthday"},
  {url:"/images/reception/rec9.jpg",name:"Coral Reef Mandap",price:"Vibrant Ocean Inspired Pavilion"},
  { url: "/images/birthday/bday3.jpg", name: "Backyard Carnival",price:"Outdoor Fun Setup" },
  { url: "/images/sangeeth/san3.jpg", name: "Illuminated Tree Canopy",price:"Tree-shaped glowing light decor" },
  { url: "/images/haldi/haldi3.jpg", name: "Kesar Chandan Decoration",price:"Saffron Sandalwood Setup"},
  {url:"/images/birthday/bday9.jpg", name: "Royal Walk", price: "A Majestic Entrance"},
  {url:"/images/sangeeth/san11.jpg", name: "Smoky Light Arch",price:"Fog-lit stage with modern arches"},
  { url: "/images/reception/rec11.jpg", name: "Rose Garden Mandap",price:"Romantic Floral Paradise Pavilion"},
  {url:"/images/wedding/wedding10.jpg", name: "Saptapadi Mandap ",price:" Seven Sacred Steps Pavilion"},
  { url: "/images/haldi/haldi4.jpg", name: "Pitambara Sanskar",price:"Yellow Sacred Ritual "},
  {url: "/images/sangeeth/san8.jpg", name: "Candlelight Soiree",price:"Warm, glowing candle decor"},
  {url:"/images/wedding/wedding7.jpg", name: "Panchavarni Mandap",price:"Five Colors Harmony Pavilion"},
  { url: "/images/reception/rec1.jpg", name: "Ivory Grace Mandap ",price:"Pure Elegance Ceremony Pavilion "},
  {url:"/images/birthday/bday7.jpg", name: "CandleLight Setup",price:"CandleLight Theme Birthday"},];

    const loadMoreImages = () => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages + 12); 
    };
    return (
        <div className="gallery-container">
            <div className="gallery-heading">
                <h1>Our Galleries</h1>
                <p>Browse through our collection of memorable moments from various events we've organized. Each image tells a story of celebration, success, and unforgettable experiences.</p>
            </div>
            <div className="gallery-grid">
                {imagegallery.slice(0, visibleImages).map((image, index) => (
                    <div className="gallery-card" key={index}>
                        <img src={image.url} alt={image.name} />
                        <div className="gallery-caption">
                            <div className="gallery-name"><b>{image.name}</b></div>
                            {image.price && <div className="gallery-price">{image.price}</div>}
                        </div>
                    </div>
                ))}
            </div>
            {visibleImages < imagegallery.length && ( 
                <div className="gallery-load-more">
                    <button className="load-more-btn" onClick={loadMoreImages}>
                        <b>Load More</b>
                    </button>
                </div>
            )}
            <div className="gallery-footer">
                <div className="gallery-footer-text">
                    <h2>Want Your Event Featured Here?</h2>
                    <p>Let us create beautiful memories for your special occasion.</p>
                    <button className="gallery-contact-btn" onClick={() => window.location.href = '/Contact'}>Plan Your Events</button>
                    <button
                        className="gallery-contact-btn"
                        onClick={() => window.location.href = '/Events'}
                    >
                        View Services
                    </button>
                </div>
            </div>
        </div>
    );
}