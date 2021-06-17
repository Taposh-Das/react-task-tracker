import Task from "./Task"

const Tasks = ({tasks, onDelete}) => {
    return (
        // so we iterate through the tasks object
        <>
        {tasks.map((task) => (
        // and pass each task as a prop
        <Task key={task.id} task={task} onDelete={onDelete}/>
        ))}  
        </>
    )
}

export default Tasks
