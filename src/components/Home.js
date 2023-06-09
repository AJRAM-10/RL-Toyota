import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import HomeCar from "./HomeCar";

function Home( {topCar} ) {

    return (
        <div className="home">
            <Header />
            <NavBar />
            <h4>Welcome to Ramirez Lee Toyota of Flatiron! Browse our excellent selection of new and used cars. Here at Ramirez Lee Toyota we strive to deliver great value whether you are buying or selling. Want to sell your car to us? Visit our sell page!</h4>
            <HomeCar car={topCar} />x
        </div>
    )
}

export default Home