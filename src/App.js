import React, {useState} from "react";
import "./App.css";
import Tarefas from "./componentes/Tarefas";

export default function App() {
  const[tarefas, setTarefas] = useState([
    { 
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    { 
      id: "2",
      title: "Ler",
      completed: true,
    },
  ]);
  return(
    <div className="container">
      <Tarefas tarefas={tarefas}/> 
    </div>
  );
}


