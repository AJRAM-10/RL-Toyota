import React from "react";

function CarCard({car}) {

    return (
        <li className="cards">
            <div>
                <img src={car.image1} alt={car.description} className="car-img"/>
                <div className="card-content">
                    <div className="car-name">{car.description}</div>
                    <div className="type">Type:
                        <p>{car.type}</p>
                    </div>
                    <div className="color">Color:
                        <p >{car.exterior}</p>
                    </div>
                    <div className="interior">Interior:
                        <p>{car.interior}</p>
                    </div>
                    <div className="miles">Mileage:
                        <p>{car.mileage}</p>
                    </div>
                    <div className="price">Price:
                        <p>{car.price}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CarCard