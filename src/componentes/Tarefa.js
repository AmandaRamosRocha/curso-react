import React from "react";
import "./Tarefa.css";
export default function Tarefa({tarefa}){
    return <div className="tarefa-container">{tarefa.title}</div>;
}