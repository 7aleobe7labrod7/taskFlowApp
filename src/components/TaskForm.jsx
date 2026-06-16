import { useState } from 'react'
import './TaskForm.css'

export default function TaskForm({ onAdd }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    onAdd(value)
    setValue('')
  }

  return (
    <section>
      <h1 className="section-title">Mis Tareas</h1>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="task-input"
            placeholder="¿Qué necesitas hacer hoy?"
            value={value}
            onChange={e => setValue(e.target.value)}
            maxLength={120}
            autoComplete="off"
            aria-label="Nueva tarea"
          />
          <button
            type="submit"
            className="btn-add"
            disabled={!value.trim()}
          >
            Agregar
          </button>
        </div>
      </form>
    </section>
  )
}