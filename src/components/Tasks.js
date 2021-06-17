import Task from "./Task"

const Tasks = ({tasks}) => {
    return (
        // so we iterate through the tasks object
        <>
        {tasks.map((task) => (
        // and pass each task as a prop
        <Task key={task.id} task={task}/>
        ))}  
        </>
    )
}

export default Tasks
