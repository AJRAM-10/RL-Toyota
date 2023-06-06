import React, { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from  "./Header";
import NavBar from "./NavBar";
import Home from "./Home";
import Gallery from './Gallery';
import Sell from "./Sell"


function App() {
  const [ cars, setCars ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then(resp => resp.json())
      .then(cars => setCars(cars))
  }, [])

  if (cars.length > 0) {
  return (
    // <div className="App">
    //   <Header />
    // </div>
    <Routes>
      <Route path = '/' element = { <Home cars={cars} /> } />
      <Route path = '/gallery' element = { <Gallery cars={cars} setCars={setCars} /> } />
      <Route path = '/sell' element = { <Sell cars={cars} setCars={setCars} /> } />
    </Routes>
  );
  }
}

export default App;
