import React from "react";
import "./Tarefa.css";
export default function Tarefa({task}){
    return <div className="tarefa-container">{task.title}</div>;
}