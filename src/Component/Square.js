import React from "react";

const Square = ({ value,onclick}) => {
    const stayle = value ? 'Squares ${value}' : 'Squares';


    return(
        <button className="{style}" onclick={onclick}>{value} </button>
    )
}

export default Square;