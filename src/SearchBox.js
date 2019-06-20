import React from "react"

const SearchBox = ({ change })=>{
    return(
        <input 
            placeholder="search Robots..." 
            type="search"
            onChange = { change }
        />

    )
}

export default SearchBox;