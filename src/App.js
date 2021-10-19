import React, {useState} from "react";
import "./App.css";
import AddTarefa from "./componentes/AddTarefa";
import Tarefas from "./componentes/Tarefas";

export default function App() {
  const[tasks, setTasks] = useState([
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
function handleTaskAddition(taskTitle) {
  const newTasks = [...tasks, {
    title: taskTitle,
    id: Math.randon(10),
    completed: false,
  },
];
    setTasks(newTasks);
}

  return(
    <div className="container">
      <AddTarefa handleTaskAddition={handleTaskAddition}/>
      <Tarefas tasks={tasks}/> 
    </div>
  );
};
