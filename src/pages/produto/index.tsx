import { Link } from "react-router-dom";
import { useState } from "react"; 
import './style.css';

export default function Tarefa() {
  
  const [tasks, setTasks] = useState(["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4"]);

  const addTask = () => {
    const newTask = prompt("Adicione a nova tarefa:");
    if (newTask) {
     
      setTasks([...tasks, newTask]);
    }
  };


  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <header>
        <nav>
        <Link className="color" to='/'>Home</Link>
      <Link className="color" to='/formulario'>Formulário</Link>
      <Link className="color" to='/tarefa'>Tarefas</Link>
      <Link className="color" to='/sobre'>Sobre</Link>
        </nav>
      </header>
      <body>
        <div className="body">
          <h3>Tarefas</h3>
          <button onClick={addTask}>Adicionar Tarefa</button>
          <div className="space">
          <ul>
            {}
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
            </div>
        </div>
      </body>
    </>
  );
}
