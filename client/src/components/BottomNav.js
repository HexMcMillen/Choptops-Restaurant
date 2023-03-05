import React from "react";

const BottomNav = () => {

    return(
        <div className="bottom">
            <div className='bottomContainer'>
                <div>
                    <h1>Hours of Operation</h1>
                    <ul>
                        <li>Monday: Closed</li>
                        <li>Tuesday: Closed</li>
                        <li>Wednesday: 5:00pm - 8:00pm</li>
                        <li>Thursday: 5:00pm - 8:00pm</li>
                        <li>Friday: 5:00pm - 9:00pm</li>
                        <li>Saturday: 11:00am - 2:00pm | 4:00pm - 9:00pm</li>
                        <li>Sunday: 12:00pm - 2:00pm | 4:00pm - 7:00pm</li>
                    </ul>
                </div>
                <div>
                    <h1>Chop Top's</h1>
                    <h2>Burgers and Malts</h2>
                    <p>100 South Main Street, Archbald PA, 18403</p>
                </div>
                <div>
                    <h1>Contact Us:</h1>
                    <p>(570)397-8139</p>
                    <p>ChopTopsBurger@gmail.com</p>
                    <a href='https://www.facebook.com/ChopTopsBurgers'>FaceBook</a>
                </div>
            </div>
        </div>
    );
}

export default BottomNav;