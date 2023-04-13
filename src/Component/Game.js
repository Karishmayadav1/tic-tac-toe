import React, { useState } from "react";
import { Winner, Winner } from "./Winner";

import Board from "./Board";
import { render } from "@testing-library/react";

const Game =() => {
    const [history, setHistory] =useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber]= useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const Winner = Winner(history[stepNumber]);
    const xO = xIsNext ? "x" : "O";
    
    const handleclick = (i) => {
        const historyPoint = history.slice(0,stepNumber +1);
        const current = historyPoint[stepNumber];
        const squares = [...current];

        // if return if won or occupied

        if(Winner || squares[i]) return;

        squares[i] = xO;
        setHistory([...historyPoint.squares])
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);      
    };
    const jumpTo = (step) =>{
        setStepNumber(step);
        setXisNext (step % 2===0);
    };

    const renderMoves = () =>
    history.map(_step, move) => {
        const destination = move ? 'Go to move #${move}' : " Go to staart";
        return(
            <li key={move}>
                <button onclick={() => jumpTo(move)}>{destination}</button>

            </li>

        )
    };


    return(
        <>
        <h1> React tictactoe</h1>
        <board squares={history[stepNumber]} onclick={handleclick}/>
        <div className="info-wrapper">
            <div>
            <h3>history</h3>
            {renderMoves()}
            </div>

        
        <h3>{Winner ? "Winner:" + Winner : "Next player:" + xO}</h3>
        </div>
        </>
    )
}

export default Game;

