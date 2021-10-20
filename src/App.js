import React, {useState} from "react";
import "./App.css";
import AddTarefa from "./componentes/AddTarefa";
import Tarefas from "./componentes/Tarefas";
import {v4 as uuidv4} from "uuid"

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

  function handleTaskClick(taskId){
    const newTasks = tasks.map(task => {
      if (task.id == taskId) return {...task, completed: !task.completed}
      return task;
    });
    setTasks(newTasks);
  }
  
  function handleTaskAddition(taskTitle) {
  const newTasks = [...tasks, {
    title: taskTitle,
    id: uuidv4(),
    completed: false,
  },
  ];
    setTasks(newTasks);
  }

  function handleTaskDeletion(taskId){ 

  }
  return(
    <div className="container">
      <AddTarefa handleTaskAddition={handleTaskAddition}/>
      <Tarefas tasks={tasks} handleTaskClick={handleTaskClick}/> 
    </div>
  );
};
