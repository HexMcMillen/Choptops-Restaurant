import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/RestaurantLogo.jpg';

const HomePageTwo = () => {

    return (
        <div className='body'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='cols cols0'>
                        <h1 className='topLine'>Burgers with a Spooky Twist!</h1>
                        <p>Star in your own scary movie, with menu items named after horror films and icons!</p>
                        <div className='buttons'>
                            <button><Link  to="/ChopTops/Burgers">Burgers</Link></button>
                            <button><Link to="/ChopTops/Drinks">Malts</Link></button>
                        </div>
                    </div>
                    <div className='cols cols1'>
                        <div className='imageBox'>
                                <img src={Logo}  alt="Chop Tops Restaurant Logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageTwo;