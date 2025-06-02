import React from 'react';
import '../styles/Wedding.css';

const weddingGalleries = [
  { url: "/images/birthday/bday12.jpg", name: "First Steps Celebration",price:"1st Birthday Setup" },
  { url: "/images/birthday/bday1.jpg", name: "Mickey Mouse Clubhouse",price:"Disney Theme" },
  {url:"/images/birthday/bday2.jpg", name: "Golden Glamour",price:"Gold Theme Birthday"},
  { url: "/images/birthday/bday4.jpg", name: "Pink Paradise Party",price:"All Pink Celebration" },
  { url: "/images/birthday/bday5.jpg", name: " Princess Palace Party",price:"Royal Girl's Birthday"},
  { url: "/images/birthday/bday3.jpg", name: "Backyard Carnival",price:"Outdoor Fun Setup" },
  { url: "/images/birthday/bday6.jpg", name: "Golden Years Celebration",price:"50+ Birthday Party"},
  {url:"/images/birthday/bday7.jpg", name: "CandleLight Setup",price:"CandleLight Theme Birthday"},
  {url:"/images/birthday/bday8.jpg", name: "Balloon Voyage Bliss", price: "Balloon Theme Birthday"},
  {url:"/images/birthday/bday9.jpg", name: "Royal Walk", price: "A Majestic Entrance"},
  {url:"/images/birthday/bday10.jpg", name: "Blue Ocean Bash",price:"Blue Theme Setup"},
  {url:"/images/birthday/bday11.jpg", name: "Safari Jungle Party",price:"Animal Adventure Setup"},
];

export function BirthdayParties() {
  return (
    <div className="wedding-container">
        <div className="heading-wed">
            <h1>Birthday Party</h1>
            <p>A Celebration of Life, Laughter, and Lasting Memories</p>
        </div>
        <div className="about-wedding">
            <h2>About Birthday</h2>
            <p>Birthdays are more than just dates — they are milestones filled with love, reflection, and joy. Whether it’s an intimate gathering or a grand celebration, birthday parties bring together family and friends to celebrate life’s special moments.</p><br/>
            <p>We offer customized decorations, live music or DJ setups, engaging activities, photo zones, and seamless coordination ensuring a memorable birthday experience for guests of all ages.</p>
        </div> 
      <h1>Our Birthday setups</h1>
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