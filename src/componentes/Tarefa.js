import React from "react";
import "./Tarefa.css";
export default function Tarefa({task, handleTaskClick}){
    return(
    <div className="tarefa-container" style={task.completed ? {borderLeft:"6px solid chartreuse"} : {}}>
        <div className="task-tittle" onClick={()=> handleTaskClick(task.id)}>
            {task.title}
        </div>
        <div className="buttons-container">
            <button className="remove-task-button">x</button>
        </div>
    </div>);
}