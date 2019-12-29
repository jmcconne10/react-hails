import React from 'react';
import './main.css';
import './navbar.css';


function Navbar() {
    return (
        <div>
        <div>
        <header className="overflow--auto">
            <h1 className="color--skyBlue section__heading--largest">
                {/* !--Your name goes here --> */}
                hailingHails
            </h1>
        </header>
        </div>  

        <div>

        <ul className="flex-container">
            <li><a className="active" href="#/">Home</a></li>
            <li><a href="/submitride">Submit Ride</a></li>
            <li><a href="/myrides">My Rides</a></li>
            <li style={{flex: 1,alignSelf: 'flex-end'}} ><a style={{textAlign: 'right'}}href="#">Account</a></li>
        </ul>

        </div>
        </div>
    );
  }
  
  export default Navbar;