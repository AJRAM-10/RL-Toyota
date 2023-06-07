import React from "react";
import Header from "./Header"
import Form from "./Form"
import NavBar from "./NavBar";

function Sell( {cars, setCars} ) {

    function handleFormSubmit(newCar) {
        setCars([...cars, newCar])
    }
    return(
        <div>
            <Header />
            <NavBar />
            <h2>Sell Your Car</h2>
            <Form onSellFormSubmit={handleFormSubmit}/>
        </div>
    )
}

export default Sell