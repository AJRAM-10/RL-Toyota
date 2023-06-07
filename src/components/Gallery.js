import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Search from "./Search";
import CarCardList from "./CarCardList";

function Gallery({cars}) {
    const [ search, setSearch ] = useState("")
    const [ car, setCar ] = useState(findCars[0])

    function handleCarClick(car) {
        setCar(car)
    }

    const findCars = cars.filter((car) => {
        return car.description.toLowerCase().includes(search.toLowerCase()) || car.type.toLowerCase().includes(search.toLowerCase())
    })

    return(
        <div className="gallery">
            <Header />
            <NavBar />
            <Search setSearch={setSearch} />
            <Modal car={car} />
            <CarCardList cars={findCars} onCarClick={handleCarClick} />
        </div>
    )
}

export default Gallery