import React, { useState } from "react";

function BuyModal({ car,buyDisplay, setBuyDisplay }) {

    const [ name, setName ] = useState("")
    const [ address, setAddress ] = useState("")
    const [ number, setNumber ] = useState("")
    const [ offer, setOffer ] = useState("")
    const [ message, setMessage ] = useState("")

    function handleClose() {
        setBuyDisplay(false)
        setName("")
        setAddress("")
        setNumber("")
        setOffer("")
        setMessage("")
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (name.length > 0 
            && address.length > 0 
            && number.length > 0 
            && offer.length > 0) {

                setMessage(`Thank you, ${name}, for your interest in our, ${car.description}. If your offer ($${offer}) is approved, you will be contacted at ${number}!`)
            }
        else {
            setName("")
            setAddress("")
            setNumber("")
            setOffer("")
        }
    }

    return(
        <div className="buy-modal-content" style={{display: buyDisplay? 'block' : 'none'}}>
            <div className="buy-modal-header">
                <span className="buy-close" onClick={handleClose}>&times;</span>
                <h2>Please Fill Out The Request Form Below</h2>
            </div>
            <div className="buy-modal-body">
                <div className="buy-modal-content">
                    <div className="buy-form">
                    <form id= "buy-car-form" onSubmit={handleSubmit}>
                    <label>Your name: </label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/> <br /> 
                    <label>Your address: </label>
                    <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} /> <br />
                    <label>Your number: </label>
                    <input type="text" name="number" value={number} onChange={(e) => setNumber(e.target.value)} /> <br />
                    <label>Your offer: </label>
                    <input type="text" name="offer" value={offer} onChange={(e) => setOffer(e.target.value)} /> <br />
                    <button type="submit">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
            <div className="message">
                {message}
            </div>
            </div>
        </div>
    )
}

export default BuyModal