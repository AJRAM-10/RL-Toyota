import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import CarCard from "./CarCard";
import HomeCar from "./HomeCar";

function Home( {cars} ) {
    const topCar = cars.reduce((top, car) => top.likes > car.likes ? top : car)
    return (
        <div>
            <Header />
            <NavBar />
            <h4>Welcome to Ramirez Lee Toyota of Flatiron! Browse our excellent selection of new and used cars. Here at Ramirez Lee Toyota we strive to deliver great value whether you are buying or selling. Want to sell your car to us? Visit our sell page!</h4>
            <HomeCar car={topCar} />
        </div>
    )
}

export default Home