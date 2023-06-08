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
                price: (parseInt(price.replaceAll(',','')) + 2000).toLocaleString("en-US")
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
                setPrice("")
                alert("Incomplete Form")
        }
    }

    return(
        <form id= "sell-car-form" onSubmit={handleSubmit}>
            <label for="description">Car description: </label>
            <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} /> <br /> 
            <label for="exterior">Exterior color: </label>
            <input type="text" name="exterior" value={exterior} onChange={(e) => setExterior(e.target.value)} /> <br />
            <label for="interior">Interior color: </label>
            <input type="text" name="interior" value={interior} onChange={(e) => setInterior(e.target.value)} /> <br />
            <label for="engine">Engine type: </label>
            <input type="text" name="engine" value={engine} onChange={(e) => setEngine(e.target.value)} /> <br />
            <label for="mileage">Current mileage: </label>
            <input type="text" name="mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} /> <br />
            <label for="drivetrain">Drivetrain type: </label>
            <input type="text" name="drivetrain" value={drivetrain} onChange={(e) => setDrivetrain(e.target.value)} /> <br />
            <label for="transmission">Transmission type: </label>
            <input type="text" name="transmission" value={transmission} onChange={(e) => setTransmission(e.target.value)} /><br />
            <label for="fuelEfficiency">Fuel efficiency: </label>
            <input type="text" name="fuelEfficiency" value={fuelEfficiency} onChange={(e) => setFuelEfficiency(e.target.value)} /> <br />
            <label for="type">Sedan/SUV/Truck: </label>
            <input type="text" name="type" value={type} onChange={(e) => setType(e.target.value)} /> <br />
            <label for="image1">Image: </label>
            <input type="text" name="image1" value={image1} onChange={(e) => setImage1(e.target.value)} /> <br /> 
            <label for="price">Desired price: </label>
            <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} /> <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form