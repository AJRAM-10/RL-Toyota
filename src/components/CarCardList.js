import React from "react";
import CarCard from "./CarCard";

function CarCardList({ cars }){

    const cards = cars.map((car) => {
        return (
            <CarCard key={car.id} car={car} />
        )
    })

    return (
        <>{cards}</>
    )
}

export default CarCardList