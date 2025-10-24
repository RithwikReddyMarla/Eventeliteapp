import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Account.css';

export function Account() {
  const username = localStorage.getItem('username') || '';
  const email = localStorage.getItem('email') || '';
  const avatarUrl = localStorage.getItem('avatar') || '';

  const initials = username
    ? username.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase()
    : 'U';

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div className="account-container">
      <div className="account-box">
        <div className="account-header">
          <div className="account-avatar">
            {avatarUrl ? <img src={avatarUrl} alt="avatar" /> : <div className="account-initials">{initials}</div>}
          </div>
          <div className="account-meta">
            <h2 className="account-name">{username || 'User'}</h2>
            {email && <div className="account-email">{email}</div>}
          </div>
        </div>

        <ul className="account-list">
          <li className="account-row">
            <Link to="/favourites" className="fav-link">
              <span className="fav-heart">♡</span>
              <span className="fav-text">Favourites</span>
            </Link>
          </li>

          <li className="account-row">
            <Link to="/bookings" className="account-link">📅 Bookings</Link>
          </li>

          <li className="account-row">UserID: {username || 'Not set'}</li>

          <li className="account-row">
            <Link to="/change-password" className="account-link">Change Password</Link>
          </li>

          <li className="account-row">
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Account;