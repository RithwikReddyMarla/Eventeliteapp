import React, { useState } from 'react';
import '../styles/Login.css';
import axios from 'axios';
export function Login() {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.token);
            localStorage.setItem("username", res.username);
            window.location.href = "/"; 
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert("Login failed. Please check your credentials.");
            }
        }
    };
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <input
                        type="text"
                        className="login-input"
                        placeholder="Username"
                        name="username"
                        value={data.username}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        className="login-input"
                        placeholder="Email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </form>
                <div className="login-links">
                    <p>
                        Don't have an account? <a href="/register">Register</a>
                    </p>
                </div>
            </div>
        </div>
    );
}