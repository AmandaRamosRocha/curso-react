import React from "react";
import Tarefa from "./Tarefa"

export default function Tarefas({tasks}) {
    console.log(tasks);
    return(
        <div>
            {tasks.map((task) => (<Tarefa task={task} />))}
        </div> 
    )
};