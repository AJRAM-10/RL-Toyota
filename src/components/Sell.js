import React from "react";
import Header from "./Header"
import Form from "./Form"
import NavBar from "./NavBar";

function Sell(){
    return(
        <div>
            <Header />
            <NavBar />
            <h2>Sell Your Car</h2>
            <Form />
        </div>
    )
}

export default Sell