import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Revision Session</h1>
            <div className="content">
                <NavLink className={({ isActive }) => isActive ? "front" : "text"} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "front" : "text"} to="/About">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? "front" : "text"} to="/Login">Login</NavLink>
                {/* <NavLink to="/Posts/mobile/1">Posts via ID</NavLink> */}

            </div>
        </nav>
     );
}
export default Navbar; 