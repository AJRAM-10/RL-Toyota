import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Search from "./Search";
import CarCardList from "./CarCardList";
import Modal from "./Modal";

function Gallery({cars}) {
    const [ search, setSearch ] = useState("")
    const [ car, setCar ] = useState(cars[0])
    const [ display, setDisplay ] = useState(false)

    function handleCarClick(car) {
        setCar(car)
        setDisplay(true)
    }

    const findCars = cars.filter((car) => {
        return car.description.toLowerCase().includes(search.toLowerCase()) || car.type.toLowerCase().includes(search.toLowerCase())
    })

    return(
        <div className="gallery">
            <Header />
            <NavBar />
            <Search setSearch={setSearch} />
            <Modal car={car} display={display} setDisplay={setDisplay} />
            <CarCardList cars={findCars} onCarClick={handleCarClick} />
        </div>
    )
}

export default Gallery