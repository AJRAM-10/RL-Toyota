import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return(
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/sell">Sell</Link>
            </div>
        </nav>
    )
}

export default NavBar 
