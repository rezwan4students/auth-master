import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/ra-logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" height="70px" />
           <h4 className='titleStyle'>Immigration Consultancy </h4>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                    <button onClick={handleSignOut}>Sign out</button>
                    :
                    <Link to="/login">Login</Link>}
                
            </div>
        </nav>
    );
};

export default Header;