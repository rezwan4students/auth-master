import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import logo from '../../images/ra-logo.png';
import './Header.css';
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
        
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" height="70px" />
           <h4 className='titleStyle'>Immigration Consultancy </h4>
            <div className='all-links'>
                <NavLink className={({ isActive }) => isActive ? "activated" : "not-activated"}  to="/services">Services</NavLink>
                
                <NavLink className={({ isActive }) => isActive ? "activated" : "not-activated"} to="/checkout">Checkout</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activated" : "not-activated"} to="/blogs">Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activated" : "not-activated"} to="/about">About Me</NavLink>
                { 
                    user ?
                    <button className='user-btn' onClick={handleSignOut}>Sign out</button>
                    :
                    <NavLink className={({ isActive }) => isActive ? "activated" : "not-activated"} to="/login">Login</NavLink>}
                
            </div>
        </nav>
    );
};

export default Header;