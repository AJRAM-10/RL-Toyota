import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return(
        <nav>
            <div>
                <Link to="/">
                    <span className="home-link">
                    <h3>Home</h3>
                    </span>
                </Link>
                <Link to="/gallery">
                    <span className="gallery-link">
                    <h3>Gallery</h3>
                    </span>
                </Link>
                <Link to="/sell">
                    <span className="sell-link">
                    <h3>Sell Now</h3>
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar 
