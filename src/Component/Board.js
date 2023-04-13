import React from "react";

import Square from "./Square";

const Board = ({ Squares, onclick}) => (

    <div className="board">
        {Squares.map((square ,i) =>(<Square key={i} value={Square}
        onclick={() => onclick(i)}/>
        ))}
    </div>

)

export default Board;