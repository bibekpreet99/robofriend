import React from "react"

const SearchBox = ({ change })=>{
    return(
        <input 
            className="pa3 ma2 bg-lightest-blue"
            placeholder="search Robots..." 
            type="search"
            onChange = { change }
        />

    )
}

export default SearchBox;