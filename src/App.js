import { useState, useEffect } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  // now the task is part of our App.js component state
  const [tasks, setTasks] = useState ([])

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchtasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // fetch Tasks
  const fetchtasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = async(id) => {
    // this line is to delete task from json server
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE'
    })

    /*for each delete of task, we filter out the id on which the red cross
    icon was clicked. and only display the rest of the tasks*/
    setTasks(tasks.filter((task) => task.id!==id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
    { ...task, reminder: !task.reminder } : task))
  }

  return (
    //For Tasks, now we can take our tasks object and pass it in component as prop
    <div className="container">
      <Header title={"My first react app"} 
      onAdd={() => setShowAddTask (!showAddTask)} 
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} />:
      ("No Task to show")}
    </div>
  );
}

export default App;
