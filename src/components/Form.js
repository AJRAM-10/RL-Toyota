import React, { useState } from "react";

function Form( {onSellFormSubmit} ){

    const [ description, setDescription ] = useState("")
    const [ exterior, setExterior ] = useState("")
    const [ interior, setInterior ] = useState("")
    const [ engine, setEngine ] = useState("")
    const [ mileage, setMileage ] = useState("")
    const [ drivetrain, setDrivetrain ] = useState("")
    const [ transmission, setTransmission ] = useState("")
    const [ fuelEfficiency, setFuelEfficiency ] = useState("")
    const [ type, setType ] = useState("")
    const [ image1, setImage1 ] = useState("")
    const [ image2, setImage2 ] = useState("")
    const [ image3, setImage3 ] = useState("")
    const [ image4, setImage4 ] = useState("")
    const [ image5, setImage5 ] = useState("")
    const [ price, setPrice ] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        
        if (description.length > 0 
        && exterior.length > 0 
        && interior.length > 0 
        && engine.length > 0
        && mileage.length > 0 
        && drivetrain.length > 0 
        && transmission.length > 0 
        && fuelEfficiency.length > 0 
        && type.length > 0 
        && image1.length > 0
        && image2.length > 0 
        && image3.length > 0 
        && image4.length > 0 
        && image5.length > 0  
        && price.length > 0) {

            const newCar = {
                description: description,
                exterior: exterior,
                interior: interior,
                engine: engine,
                mileage: mileage,
                drivetrain: drivetrain,
                transmission: transmission,
                fuelEfficiency: fuelEfficiency,
                type: type,
                image1: image1,
                image2: image2,
                image3: image3,
                image4: image4,
                image5: image5,
                price: price
            }

            fetch("http://localhost:3000/cars", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newCar)
            })
                .then(resp => resp.json())
                .then(newCar => onSellFormSubmit(newCar))

                setDescription("")
                setExterior("")
                setInterior("")
                setEngine("")
                setMileage("")
                setDrivetrain("")
                setTransmission("")
                setFuelEfficiency("")
                setType("")
                setImage1("")
                setImage2("")
                setImage3("")
                setImage4("")
                setImage5("")
                setPrice("")
            }
        else {
                setDescription("")
                setExterior("")
                setInterior("")
                setEngine("")
                setMileage("")
                setDrivetrain("")
                setTransmission("")
                setFuelEfficiency("")
                setType("")
                setImage1("")
                setImage2("")
                setImage3("")
                setImage4("")
                setImage5("")
                setPrice("")
        }
    }

    return(
        <form id = "sell-car-form" onSubmit={handleSubmit}>
            <input type="text" name="description" placeholder="Car description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" name="exterior" placeholder="Exterior color" value={exterior} onChange={(e) => setExterior(e.target.value)} />
            <input type="text" name="interior" placeholder="Interior color" value={interior} onChange={(e) => setInterior(e.target.value)} />
            <input type="text" name="engine" placeholder="Engine type" value={engine} onChange={(e) => setEngine(e.target.value)} />
            <input type="text" name="mileage" placeholder="Current mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} />
            <input type="text" name="drivetrain" placeholder="Drivetrain type" value={drivetrain} onChange={(e) => setDrivetrain(e.target.value)} />
            <input type="text" name="transmission" placeholder="Transmission type" value={transmission} onChange={(e) => setTransmission(e.target.value)} />
            <input type="text" name="fuelEfficiency" placeholder="Fuel efficiency" value={fuelEfficiency} onChange={(e) => setFuelEfficiency(e.target.value)} />
            <input type="text" name="type" placeholder="Sedan/SUV/Truck" value={type} onChange={(e) => setType(e.target.value)} />
            <input type="text" name="image1" placeholder="First image" value={image1} onChange={(e) => setImage1(e.target.value)} />
            <input type="text" name="image2" placeholder="Second image" value={image2} onChange={(e) => setImage2(e.target.value)} />
            <input type="text" name="image3" placeholder="Third image" value={image3} onChange={(e) => setImage3(e.target.value)} />
            <input type="text" name="image4" placeholder="Fourth image" value={image4} onChange={(e) => setImage4(e.target.value)} />
            <input type="text" name="image5" placeholder="Fifth image" value={image5} onChange={(e) => setImage5(e.target.value)} />
            <input type="text" name="price" placeholder="Desired price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form