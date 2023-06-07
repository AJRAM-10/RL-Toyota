import React from "react";

function CarCard({ car, onCarClick }) {
    function handleClick() {
        onCarClick(car)
    }
    return (
        <li className="cards">
            <div>
                <img src={car.image1} alt={car.description} className="car-img" onClick={handleClick} />
                <div className="card-content">
                    <div className="car-name">
                        <h3>{car.description}</h3>
                    </div>
                    <div className="type">
                        <p>Type: {car.type}</p>
                    </div>
                    <div className="color">
                        <p >Color: {car.exterior}</p>
                    </div>
                    <div className="interior">
                        <p>Interior: {car.interior}</p>
                    </div>
                    <div className="miles">
                        <p>Mileage: {car.mileage}</p>
                    </div>
                    <div className="price">
                        <p>Price: {car.price}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CarCard