import { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [theme, setTheme]   = useState('light')
  const [tasks, setTasks]   = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () =>
    setTheme(prev => prev === 'light' ? 'dark' : 'light')

  const addTask = (text) => {
    if (!text.trim()) return
    setTasks(prev => [
      ...prev,
      { id: Date.now(), text: text.trim(), done: false, createdAt: new Date() }
    ])
  }

  const toggleTask = (id) =>
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))

  const removeTask = (id) =>
    setTasks(prev => prev.filter(t => t.id !== id))

  const clearDone = () =>
    setTasks(prev => prev.filter(t => !t.done))

  const visible = tasks.filter(t => {
    if (filter === 'pending') return !t.done
    if (filter === 'done')    return  t.done
    return true
  })

  const counts = {
    all:     tasks.length,
    pending: tasks.filter(t => !t.done).length,
    done:    tasks.filter(t =>  t.done).length,
  }

  return (
    <div className="app-wrapper">
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="app-main">
        <TaskForm onAdd={addTask} />

        <nav className="filter-bar" aria-label="Filtrar tareas">
          {['all', 'pending', 'done'].map(key => (
            <button
              key={key}
              className={`filter-btn${filter === key ? ' active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {key === 'all' ? 'Todas' : key === 'pending' ? 'Pendientes' : 'Completadas'}
              <span className="badge">{counts[key]}</span>
            </button>
          ))}
        </nav>

        <TaskList tasks={visible} onToggle={toggleTask} onRemove={removeTask} />

        {counts.done > 0 && (
          <div className="clear-row">
            <button className="btn-clear" onClick={clearDone}>
              Limpiar completadas ({counts.done})
            </button>
          </div>
        )}

        {tasks.length === 0 && (
          <p className="empty-msg">🚀 ¡Sin tareas! Agrega tu primera tarea arriba.</p>
        )}
      </main>

      <Footer />
    </div>
  )
}