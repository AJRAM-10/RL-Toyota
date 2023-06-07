import React from "react";
import CarCard from "./CarCard";

function CarCardList({ cars, onCarClick, blurred }) {
    const cards = cars.map((car) => {
        return (
            <CarCard key={car.id} car={car} onCarClick={onCarClick} />
        )
    })

    return (
        <ul className= "cards" style={{filter: blurred? 'blur(8px)' : 'none'}}>
            {cards}
        </ul> 
    )
}

export default CarCardList