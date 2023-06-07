import React from "react";
import CarCard from "./CarCard";

function CarCardList({ cars, onCarClick }){

    const cards = cars.map((car) => {
        return (
            <CarCard key={car.id} car={car} onCarClick={onCarClick} />
        )
    })

    return (
        <>{cards}</>
    )
}

export default CarCardList