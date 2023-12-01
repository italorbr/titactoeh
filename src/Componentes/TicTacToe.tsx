import React,{useState} from "react";
import Board from "./Board";

const TicTacToe = () => {

    const[value,setValue]= useState (Array(9).fill(null))
    const [currentPlayer,setcurrentPlayer]=useState('X')

    const handleclick=(index:number)=>{
        const updateValue=[...value]
        updateValue[index]=currentPlayer
        setValue(updateValue)
        
        

    }
    return(
        <div>
            <h1>TIC-TAC-TOE</h1>

            <Board onClick={handleclick} value={value}/>

        </div>

    );
};

export default TicTacToe;