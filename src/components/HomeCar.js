import React from "react";

function HomeCar({ car }) {
    return(
            <div className="home-car">
                <h3>Our Most Popular Car</h3>
                <img src={car.image1} alt={car.description} className="home-car-img" />
                <div className="home-car-content">
                    <h3>{car.description}</h3>
                    <ul className="home-car-details">
                        <li>Type: {car.type}</li>
                        <li >Exterior: {car.exterior}</li>
                        <li>Interior: {car.interior}</li>
                        <li>Mileage: {car.mileage}</li>
                        <li>Price: {car.price}</li>
                        <li>Likes: {car.likes}</li>
                    </ul>
                </div>
            </div>
    )
}

export default HomeCar