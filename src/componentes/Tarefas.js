import React from "react";
import Tarefa from "./Tarefa"

export default function Tarefas({tasks, handleTaskClick, handleTaskDeletion }) {
    console.log(tasks);
    return(
        <div>
            {tasks.map((task) => (<Tarefa task={task} 
            handleTaskClick={handleTaskClick}
            handleTaskDeletion={handleTaskDeletion} />))}
        </div> 
    )
};