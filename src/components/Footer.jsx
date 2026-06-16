import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        TaskFlow · Programación Front End – Semana 4 · IPG · {new Date().getFullYear()}
      </p>
    </footer>
  )
}