import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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

  return (
    //For Tasks, now we can take our tasks object and pass it in component as prop
    <div className="container">
      <Header title={"My first react app"}/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
