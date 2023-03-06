import React from "react";
import { Link } from "react-router-dom";
import Facebook from '../assets/icons8-facebook-32.png';

const NavBar = () => {
    return (
        <div>
            <div className='nav'>
                <div className='logo'>Chop Top's Burger and Malts</div>
                <ul className='navItems'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ChopTops/Burgers">Burgers</Link></li>
                    <li><Link to="/ChopTops/Drinks">Malts|Desserts</Link></li>
                </ul>
                <div className='links'>
                    <a href='https://www.facebook.com/ChopTopsBurgers'><img src={ Facebook } alt="FaceBook Logo"></img></a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;