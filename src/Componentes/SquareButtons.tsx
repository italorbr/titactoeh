import React from "react";

type squareProps={
    value: String,
    onClick:()=>void
    
}
    const SquareButton = ({onClick,value}:squareProps) => {
        

        return (
            <button type ="button" onClick={onClick}>
                {value}
    
            </button>
    
    
        
    
        );
    };

    export default SquareButton;
