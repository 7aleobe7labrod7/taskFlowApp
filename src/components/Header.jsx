import './Header.css'

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <span aria-hidden="true">✅</span>
          <span className="brand-name">TaskFlow</span>
        </div>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
        >
          {theme === 'light' ? '🌙 Modo oscuro' : '☀️ Modo claro'}
        </button>
      </div>
    </header>
  )
}