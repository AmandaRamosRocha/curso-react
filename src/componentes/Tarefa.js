import React from "react";
import "./Tarefa.css";
import {CgClose} from "react-icons/cg"

export default function Tarefa({task, handleTaskClick, handleTaskDeletion}){
    return(
    <div className="tarefa-container" style={task.completed ? {borderLeft:"6px solid chartreuse"} : {}}>
        <div className="task-tittle" onClick={()=> handleTaskClick(task.id)}>
            {task.title}
        </div>
        <div className="buttons-container">
            <button className="remove-task-button" onClick={()=>handleTaskDeletion(task.id)}><CgClose/></button>
            <button className="see-task-details-button" onClick={}><CgClose/></button>
        </div>
    </div>);
}