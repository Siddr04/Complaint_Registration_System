import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

import image2 from "../assets/image 2.png";
import image3 from "../assets/image 3.png";
const Start = () => {
  return (
    <>
    <nav>
        <img src={logo} alt="logo" height="80px" width="80px"/>
        <h1>Complaint System</h1>
        <div class="nav">
        <Link to="/" className="btn">Home</Link>    
        </div>
        
    </nav>
    <h3><center>Login</center></h3>
    <div class="login_container">
        <div class="user">
            <img src={image3} alt="user login"/>
            <a href="/userlogin" class="btn1">User Login</a>
        </div>
        <div class="user">
            <img src={image2} alt="admin login"/>
            <a href="/adminlogin" class="btn1">Admin Login</a>
        </div>
    </div>
    </>
  )
}

export default Start