import React from 'react';
import '../styles/Wedding.css';

const weddingGalleries = [
  { url: "/images/sangeeth/san3.jpg", name: "Illuminated Tree Canopy",price:"Tree-shaped glowing light decor" },
  {url:"/images/sangeeth/san11.jpg", name: "Smoky Light Arch",price:"Fog-lit stage with modern arches"},
  { url: "/images/sangeeth/san1.jpg", name: "Golder Glow Aisle",price:"Radiant path with golden lights" },
  { url: "/images/sangeeth/san2.jpg", name: "Blossom Archway",price:"Romantic florals over arches" },
  { url: "/images/sangeeth/san4.jpg", name: "Feathered Elegance",price:"Regal white feather structures" },
  { url: "/images/sangeeth/sangeeth_1.jpg", name: "Floral setup Fiesta",price:"Vibrant setup with florals and ribbons" },
  {url:"/images/sangeeth/san12.jpg", name: "Royal Light Steps",price:"Regal steps with pillar lighting"},
  { url: "/images/sangeeth/san6.jpg", name: "Enchanted Garden Canopy",price:"Fairy lights under green cover" },
  {url: "/images/sangeeth/san7.jpg", name: "Mirrored Aisle Glamour",price:"Reflective aisle with florals"},
  {url: "/images/sangeeth/san8.jpg", name: "Candlelight Soiree",price:"Warm, glowing candle decor"},
  {url: "/images/sangeeth/san9.jpg", name: "Golden Candlewalk",price:"Glowing golden candle stage"},
  {url: "/images/sangeeth/san10.jpg", name: "Lantern Lawn Night",price:"Outdoor setup with hanging lanterns"},
  { url: "/images/sangeeth/san5.jpg", name: "Lantern Pathway",price:"Hanging lantern-lit walkway"},
];

export function Sangeeth() {
  return (
    <div className="wedding-container">
        <div className="heading-wed">
            <h1>Sangeet Ceremony</h1>
            <p>Music, Dance, and Celebration in Perfect Harmony</p>
        </div>
        <div className="about-wedding">
            <h2>About Sangeet</h2>
            <p>The Sangeet is a high-energy pre-wedding event where families come together for an evening of music, laughter, and choreographed dance performances. It’s a joyful celebration of the union to come.</p><br/>
            <p>Our team creates a vibrant ambiance with professional stage setups, dynamic lighting, DJ and sound systems, and customized performances making your Sangeet unforgettable.</p>
        </div> 
      <h1>Our Sangeet setups</h1>
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