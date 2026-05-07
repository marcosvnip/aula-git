import "./Sidebar.css"
import logo from "../../assets/learn.svg"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-topo">
        <img src={logo} alt="logo" className="sidebar-logo" />
        <h2>Aluno Online</h2>
      </div>

      <ul>
        <li>Dashboard</li>
        <li>Notas</li>
        <li>Faltas</li>
        <li>Boletos</li>
        <li>Requerimentos</li>
        <li>Sair</li>
      </ul>
    </div>
  )
}

export default Sidebar