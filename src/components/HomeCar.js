import React from "react";

function HomeCar({ car }) {
    return(
            <div>
                <img src={car.image1} alt={car.description} className="home-car-img" />
                <div className="home-car-content">
                    <h3>{car.description}</h3>
                    <p>Type: {car.type}</p>
                    <p >Color: {car.exterior}</p>
                    <p>Interior: {car.interior}</p>
                    <p>Mileage: {car.mileage}</p>
                    <p>Price: {car.price}</p>
                </div>
            </div>
    )
}

export default HomeCar