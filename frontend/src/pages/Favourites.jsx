import React, { useState, useEffect } from 'react';
import '../styles/favourites.css';

const FAV_KEY = 'favourites';

export function Favourites() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
      setItems(Array.isArray(stored) ? stored : []);
    } catch {
      setItems([]);
    }
  }, []);

  return (
    <div className="page-container favourites-container">
      <div className="favourites-inner">
        <h1 className="favourites-title">Favourites</h1>

        {!items.length ? (
          <p className="favourites-empty">No favourites yet.</p>
        ) : (
          <div className="favourites-grid">
            {items.map((it, idx) => (
              <div key={idx} className="gallery-card">
                <img src={it.url} alt={it.name} className="gallery-img" />
                <div className="gallery-meta">
                  <div className="gallery-name"><b>{it.name}</b></div>
                  {it.price && <div className="gallery-price">{it.price}</div>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favourites;