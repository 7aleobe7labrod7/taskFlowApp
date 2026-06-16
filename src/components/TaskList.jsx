import TaskItem from './TaskItem'
import './TaskList.css'

export default function TaskList({ tasks, onToggle, onRemove }) {
  if (tasks.length === 0)
    return <p className="list-empty">No hay tareas en esta categoría.</p>

  return (
    <ul className="task-list" aria-label="Lista de tareas">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  )
}