import { useState } from "react"

const Tasks = () => {
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
        <>
        {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
        ))}  
        </>
    )
}

export default Tasks
