import React from "react";
import { useState } from "react";

function Search({setSearch}) {

    function handleChange(e){
        return setSearch(e.target.value)
    }

    return (
        <div className="search">
            <h4>Search For a Car</h4>
            <input type="text" className="searchTerm" placeholder="Search by description or type" onChange={handleChange}>
            </input>
        </div>
    )

}

export default Search