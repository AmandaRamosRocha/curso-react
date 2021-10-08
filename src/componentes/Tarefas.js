import React from "react";
import Tarefa from "./Tarefa"

export default function Tarefas({tarefas}) {
    console.log(tarefas);
    return(
        <>
            {tarefas.map( tarefa => <Tarefa tarefa={tarefa} />)}  
        </>
    )
};