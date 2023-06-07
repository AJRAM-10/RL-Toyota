import React from "react";
import CarCard from "./CarCard";

function CarCardList({ cars, onCarClick }) {

    const cards = cars.map((car) => {
        return (
            <CarCard key={car.id} car={car} onCarClick={onCarClick} />
        )
    })

    return (
        <ul className= "cards">
            {cards}
        </ul> 
    )
}

export default CarCardList