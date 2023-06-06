import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Search from "./Search";

function Gallery() {
    return(
        <div className="gallery">
            <Header />
            <NavBar />
            <Search />
        </div>
    )
}

export default Gallery