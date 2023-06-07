import React, { useState } from "react";

function Modal({ car }) {
    const [ display, setDisplay ] = useState(true)
    
    
    return(
        <div class="modal-content" style={{display: display? 'block' : 'none'}}>
            <div class="modal-header">
                <span class="close">&times;</span>
                <h2>{car.description}</h2>
            </div>
            <div class="modal-body">
                <div className="card-content">
                    <img src={car.image1} alt={car.description} className="car-img"/>
                    <div className="car-details">
                            <ul className="details-list">
                                <li>Exterior: {car.exterior}</li>
                                <li>Interior: {car.interior}</li>
                                <li>Engine: {car.engine}</li>
                                <li>Mileage: {car.mileage}</li>
                                <li>Drivetrain: {car.drivetrain}</li>
                                <li>Transmission: {car.transmission}</li>
                                <li>Fuel Efficiency: {car.fuelEfficiency}</li>
                            </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <h4>Price: {car.price}</h4>
            </div>
        </div>
    )
}

export default Modal