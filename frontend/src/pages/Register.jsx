import React from 'react';
import '../styles/Register.css';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

export function Register() {
  const[data,setData]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:""
  })
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const url="http://localhost:8080/api/users";
      const {data:res}= await axios.post(url,data);
      alert("Registration successful");
      window.location.href = "/Login"; 
    }
    catch(err){
      console.error(err);
      if(err.response && err.response.data && err.response.data.message){
        alert(err.response.data.message); 
      }
      else{
        alert("Registration failed. Please try again.");
      }
    }
  }
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
        <form>
          <input 
          type="text" 
          placeholder="username" 
          name="username" 
          value={data.username} 
          onChange={(e)=>handleChange(e)} />
          <input 
          type="email"
          placeholder="Email" 
          name='email' 
          value={data.email} 
          onChange={(e)=>handleChange(e)} />
          <input 
          type="number" 
          placeholder="Phone"  
          name='phone' 
          value={data.phone} 
          onChange={(e)=>handleChange(e)} />
          <input 
          type="password" 
          placeholder="Password" 
          name='password' 
          value={data.password} 
          onChange={(e)=>handleChange(e)} />
          <input 
          type="password" 
          placeholder="Confirm Password" 
          name='confirmPassword' 
          value={data.confirmPassword} 
          onChange={(e)=>handleChange(e)} />
          <button 
          type="submit" 
          onClick={handleSubmit}>Register</button>
        </form>
      </div>
    </div>
  );
}