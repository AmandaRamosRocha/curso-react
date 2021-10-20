import React from "react";
import Tarefa from "./Tarefa"

export default function Tarefas({tasks, handleTaskClick }) {
    console.log(tasks);
    return(
        <div>
            {tasks.map((task) => (<Tarefa task={task} handleTaskClick={handleTaskClick} />))}
        </div> 
    )
};