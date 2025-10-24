import React, { useState, useEffect } from 'react';
import '../styles/Wedding.css';

const weddingGalleries = [
  { url: "/images/haldi/haldi4.jpg", name: "Pitambara Sanskar", price: "Yellow Sacred Ritual "},
  { url: "/images/haldi/haldi2.jpg", name: "Haridra Ganesh Mandap", price: "Turmeric Ganesha Pavilion" },
  { url: "/images/haldi/haldi3.jpg", name: "Kesar Chandan Decoration", price: "Saffron Sandalwood Setup"},
  { url: "/images/haldi/haldi5.jpg", name: "Manjal Kolam ", price: "Tamil Turmeric Rangoli "},
  { url: "/images/haldi/haldi1.jpg", name: "Haldi Rangoli Mandap", price: "Turmeric Art Pavilio"},
  { url: "/images/haldi/haldi6.jpg", name: "Genda Haldi Mandap", price: "Marigold Turmeric Pavilion "},
  { url: "/images/haldi/haldi10.jpg", name: "Champa Haldi Decoration", price: "Frangipani Turmeric Decor"},
  { url: "/images/haldi/haldi9.jpg", name: "Sunflower Pitambara", price: "Sunflower Yellow Setup"},
  { url: "/images/haldi/haldi8.jpg", name: "Yellow Rose Haldi", price: "Golden Rose Ceremony"},
  { url: "/images/haldi/haldi7.jpg", name: "Guldaudi Haldi Mandap", price: "Chrysanthemum Turmeric Setup"},
  { url: "/images/haldi/haldi11.jpg", name: "Golden Sunrise Haldi", price: "Dawn Golden Setup"},
  { url: "/images/haldi/haldi12.jpg", name: "Canary Yellow Ceremony", price: "Bright Yellow Ritual"},
  { url:"/images/haldi/image_4.jpg", name: "Turmeric Bliss", price: "Golden Joyful Setup"},
];

const FAV_KEY = 'favourites';

export function Haldi() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
      setFavs(Array.isArray(stored) ? stored : []);
    } catch {
      setFavs([]);
    }
  }, []);

  const addFav = (item) => {
    if (favs.some(f => f.url === item.url)) return;
    const next = [...favs, item];
    setFavs(next);
    localStorage.setItem(FAV_KEY, JSON.stringify(next));
  };

  const removeFav = (item) => {
    if (!favs.some(f => f.url === item.url)) return;
    const next = favs.filter(f => f.url !== item.url);
    setFavs(next);
    localStorage.setItem(FAV_KEY, JSON.stringify(next));
  };

  const isFav = (item) => favs.some(f => f.url === item.url);

  return (
    <div className="wedding-container">
      <div className="heading-wed">
        <h1>Haldi Ceremony</h1>
        <p>A Sacred Ritual with a Splash of Color and Joy</p>
      </div>
      <div className="about-wedding">
        <h2>About Reception</h2>
        <p>The Haldi ceremony is a spiritually rich tradition where turmeric paste is applied to the bride and groom as a blessing for prosperity and purity.</p><br/>
        <p>We bring this event to life with floral backdrops, traditional seating, organic haldi arrangements, and ambient folk music  blending cultural beauty with visual appeal.</p>
      </div>
      <h1>Our Haldi setups</h1>
      <div className="wedding-grid">
        {weddingGalleries.map((item, idx) => (
          <div className="wedding-card" key={idx}>
            <img src={item.url} alt={item.name} />
            <div className="wedding-caption">
              <div className="wedding-meta">
                <div className="wedding-name"><b>{item.name}</b></div>
                {item.price && <div className="wedding-price">{item.price}</div>}
              </div>

              <button
                type="button"
                className={`fav-btn ${isFav(item) ? 'filled' : 'empty'}`}
                onClick={() => (isFav(item) ? removeFav(item) : addFav(item))}
                aria-pressed={isFav(item)}
                aria-label={isFav(item) ? 'Remove from favourites' : 'Add to favourites'}
              >
                <span className="heart-char" aria-hidden="true">{isFav(item) ? '❤' : '♡'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Haldi;