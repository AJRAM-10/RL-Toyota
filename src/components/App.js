import React, { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Gallery from './Gallery';
import Sell from "./Sell"


function App() {
  const [ cars, setCars ] = useState([])
  const [ topCar, setTopCar ] = useState({})

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then(resp => resp.json())
      .then(cars => {
        setCars(cars)
        setTopCar(cars.reduce((top, car) => top.likes > car.likes ? top : car))
      })
  }, [])

  function fetchData() {
    fetch("http://localhost:3000/cars")
      .then(resp => resp.json())
      .then(cars => {
        setCars(cars)
        setTopCar(cars.reduce((top, car) => top.likes > car.likes ? top : car))
      })
  }

  if (cars.length > 0) {
  return (
    <Routes>
      <Route path = '/' element = { <Home topCar={topCar} /> } />
      <Route path = '/gallery' element = { <Gallery cars={cars} setCars={setCars} fetchData={fetchData} /> } />
      <Route path = '/sell' element = { <Sell cars={cars} setCars={setCars} /> } />
    </Routes>
  );
  }
}

export default App;
