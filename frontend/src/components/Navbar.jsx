import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { About } from '../pages/About';
import { Events } from '../pages/Events';
import { Galleries } from '../pages/Galleries';
import { Contact } from '../pages/Contact';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import '../styles/Navbar.css';
export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLogout = () => {
        localStorage.clear(); 
        window.location.href = "/login"; 
    };
    const token = localStorage.getItem("token"); // Check if the user is logged in
    return (
        <>
            <nav className="navbar_event">
                <div className="navbar_event__logo">
                    <h1>Eventelite</h1>
                </div>
                <div className="navbar_event__hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={`navbar_event__links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                    <Link to="/events" onClick={toggleMenu}>Events</Link>
                    <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    {!token ? (
                        <>
                            <Link to="/login" onClick={toggleMenu}>Login</Link>
                            <Link to="/register" onClick={toggleMenu}>Register</Link>
                        </>
                    ) : (
                        <a className="logout-button" onClick={handleLogout}>Logout</a>
                    )}
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home name={localStorage.getItem("username")} />} /> {/* Pass username as a prop */}
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/gallery" element={<Galleries />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}