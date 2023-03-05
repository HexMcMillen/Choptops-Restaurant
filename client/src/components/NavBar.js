import React from "react";
import Facebook from '../assets/icons8-facebook-32.png';

const NavBar = () => {
    return (
        <div>
            <div className='nav'>
                <div className='logo'>Chop Top's Burger and Malts</div>
                <ul className='navItems'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/ChopTops/Burgers">Burgers</a></li>
                    <li><a href="/ChopTops/Drinks">Malts|Desserts</a></li>
                </ul>
                <div className='links'>
                    <a href='https://www.facebook.com/ChopTopsBurgers'><img src={ Facebook } alt="FaceBook Logo"></img></a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;