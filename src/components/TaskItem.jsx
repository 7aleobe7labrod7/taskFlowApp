import './TaskItem.css'

export default function TaskItem({ task, onToggle, onRemove }) {
  const dateLabel = new Date(task.createdAt).toLocaleString('es-CL', {
    dateStyle: 'short', timeStyle: 'short',
  })

  return (
    <li className={`task-item${task.done ? ' done' : ''}`}>
      <button
        className="task-check"
        onClick={() => onToggle(task.id)}
        aria-pressed={task.done}
        aria-label={task.done ? 'Marcar como pendiente' : 'Marcar como completada'}
      >
        {task.done ? '✅' : '⬜'}
      </button>

      <div className="task-body">
        <p className="task-text">{task.text}</p>
        <time className="task-date">{dateLabel}</time>
      </div>

      <span className={`status-badge ${task.done ? 'badge-done' : 'badge-pending'}`}>
        {task.done ? 'Completada' : 'Pendiente'}
      </span>

      <button
        className="task-remove"
        onClick={() => onRemove(task.id)}
        aria-label="Eliminar tarea"
      >✕</button>
    </li>
  )
}