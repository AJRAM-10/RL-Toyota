import { useState, useEffect } from "react"
import React from "react";

function Modal({ car, display, setDisplay, setBlurred, setBuyDisplay, fetchData }) {
    const [ likes, setLikes ] = useState(car.likes)

    console.log(car)

    useEffect(()=>{
        setLikes(car.likes)
    }, [car])

    function handleClose() {
        setDisplay(false)
        setBlurred(false)
    }

    function handleBuy() {
        setBuyDisplay(true)
    }

    function handleLike(id, e ) {
        e.preventDefault();

        fetch(`http://localhost:3000/cars/${id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({likes: likes + 1})
        })
        .then(resp => resp.json())
        .then((patchedCar) => {
            setLikes(patchedCar.likes)
            fetchData()
        })
        
    }
     

    return(
        <div className="modal-content" style={{display: display? 'block' : 'none'}}>
            <div className="modal-header">
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>{car.description}</h2>
                <p className="like" onClick={(e) => handleLike( car.id, e)}>❤️ Likes: {likes}</p>
            </div>
            <div className="modal-body">
                <div className="modal-card-content">
                    <img src={car.image1} alt={car.description} className="modal-car-img"/>
                    <div className="modal-car-details">
                            <ul className="modal-details-list">
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
            <div className="modal-footer">
                <button className="buy-request" onClick={handleBuy}>Request Purchase</button>
                <h4>Price: {car.price}</h4>
            </div>
        </div>
    )
}

export default Modal