import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
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
                    <NavLink to="/" onClick={toggleMenu} className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
                    <NavLink to="/about" onClick={toggleMenu} className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
                    <NavLink to="/events" onClick={toggleMenu} className={({isActive}) => isActive ? 'active' : ''}>Events</NavLink>
                    <NavLink to="/gallery" onClick={toggleMenu} className={({isActive}) => isActive ? 'active' : ''}>Gallery</NavLink>
                    <NavLink to="/contact" onClick={toggleMenu} className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
                    {!token ? (
                        <>
                            <NavLink to="/login" onClick={toggleMenu} className={({isActive}) => isActive ? 'active' : ''}>Login</NavLink>
                            <NavLink to="/register" onClick={toggleMenu} className={({isActive}) => isActive ? 'active' : ''}>Register</NavLink>
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