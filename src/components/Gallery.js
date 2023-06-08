import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Search from "./Search";
import CarCardList from "./CarCardList";
import Modal from "./Modal";
import BuyModal from "./BuyModal";

function Gallery({cars}) {
    const [ search, setSearch ] = useState("")
    const [ car, setCar ] = useState(cars[0])
    const [ display, setDisplay ] = useState(false)
    const [ blurred, setBlurred ] = useState(false)
    const [ buyDisplay, setBuyDisplay ] = useState(false)

    function handleCarClick(car) {
        setCar(car)
        setDisplay(true)
        setBlurred(true)
    }

    const findCars = cars.filter((car) => {
        return car.description.toLowerCase().includes(search.toLowerCase()) || car.type.toLowerCase().includes(search.toLowerCase())
    })

    return(
        <div className="gallery">
            <Header />
            <NavBar />
            <Search setSearch={setSearch} />
            <div className="modals">
            <Modal car={car} display={display} setBuyDisplay={setBuyDisplay} setDisplay={setDisplay} setBlurred={setBlurred} />
            <BuyModal car={car} buyDisplay={buyDisplay} setBuyDisplay={setBuyDisplay} />
            </div>
            <CarCardList cars={findCars} blurred={blurred} onCarClick={handleCarClick} />
        </div>
    )
}

export default Gallery