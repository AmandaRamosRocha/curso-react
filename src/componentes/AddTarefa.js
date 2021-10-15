import React, { useState } from 'react';
import "./AddTarefa.css";
import Button from './Button';

export default function AddTarefa(){
    const [inputData, setInputData] = useState("")

    function handleInputChange(e){
        setInputData(e.target.value);
    };
    return(
        <div className="add-tarefa-container">
            <input onChange={handleInputChange}
                value={inputData}
                className="add-tarefa-input"
                type="text"/>;
            <div className="add-button-container">
            <Button>Adicionar</Button>
            </div> 
        </div>
    );
}