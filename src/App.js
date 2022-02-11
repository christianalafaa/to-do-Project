// import logo from './logo.svg';
import { useState } from 'react';
import { AddTask } from './Components/AddTask';
import { Header } from './Components/Header';
import { Tasks } from './Components/Tasks';

function App() {
  const [tasks, setTasks] = useState(
    [{
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
},
{
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
},
{
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
}]
)

const [toggle, setToggle] = useState(false)

const handleToggle = () => {
  setToggle(prevState => !prevState)
  // console.log(toggle)
}

// This is an Add function
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) 
  const newTask = {id,...task}
  const updatedTask = [...tasks,newTask]
  setTasks(updatedTask)
}

// This a delete function
const deleteTask = (id) => {
  setTasks(tasks.filter(task =>{
    return task.id !== id
  }))
}
// This is sets a reminder
const toggleReminder = (id) => {
    setTasks(prevTasks => {
      return prevTasks.map(task =>{
        return task.id === id ? {...task, reminder: !task.reminder} : task
      })
    })

}

  return (
    <div className="container">
      <Header handleToggle={handleToggle} text={toggle ? "Close"  : "Add"} color={toggle ? "red" : "green"} />
      {toggle && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks taskList={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h3>Add a task</h3>}
    </div>
  );
}




export default App;
