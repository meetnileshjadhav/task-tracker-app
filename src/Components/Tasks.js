import Task from './Task';

const Tasks = ({tasks, onToggle, onDelete}) => {
  return (
    <div className="tasks">
        {tasks.map(task  => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
    </div>
  )
}

export default Tasks