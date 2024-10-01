import './App.css'; 
import {useState} from 'react'; 
import Navbar from './Navbar'; 
import { Task } from './Task';
import React from 'react'; 

function App() {

  /* states */  
  // empty array 
  const [todoList, setTodoList] = useState([]); 
  
  // empty string 
  const [newTask, setNewTask] = useState("");   
  
  const handleChange = (event) => {
    setNewTask(event.target.value); 
  };

  const addTask = () => {
      const task = {
        id: todoList.length === 0? 1: todoList[todoList.length - 1].id + 1,
        taskName: newTask, 
        completed: false,
    }; 
    setTodoList(task.taskName !== " " ? [...todoList, task] : todoList);  
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }; 

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => 
      {
          if (task.id === id) 
          {
            return{...task, completed: true};
          }
          else { return task; }
      }) 
    );
  };

  return (
  <div className="App">
      <Navbar />
      <div className="addTask">    
        <input placeholder = "list of items" onChange={handleChange}/>

        <button id="add" onClick={addTask}>+<br></br>Task</button>

      </div>

      <h2 id="plist">CHECKLIST OF ITEMS</h2>
      
      <div className="list">
            {todoList.map((task) => 
            {
                return ( 
                  <Task 
                    taskName = {task.taskName}
                    id = {task.id}
                    completed = {task.completed}
                    deleteTask = {deleteTask} 
                    completeTask = {completeTask} 
                  />
                );   
            })}
          </div>  
      </div>
    );
}

export default App;