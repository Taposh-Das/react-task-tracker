import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // now the task is part of our App.js component state
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: "Doctors Appointment",
        day: 'Feb 5th at 2:30',
        reminder: true,
    },
    {
        id: 2,
        text: "Meeting at School",
        day: 'Feb 6th at 1:30',
        reminder: true,
    },
    {
        id: 3,
        text: "Food Shopping",
        day: 'Feb 5th at 2:30',
        reminder: false,
    },
  ])

  // Delete Tasl
  const deleteTask = (id) => {
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
      <Header title={"My first react app"}/>
      <AddTask />
      {tasks.length>0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} />:
      ("No Task to show")}
    </div>
  );
}

export default App;
