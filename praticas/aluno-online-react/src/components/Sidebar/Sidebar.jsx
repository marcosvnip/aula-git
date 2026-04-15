import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="logo">
  <img src="./learn.svg" alt="Logo" />
</div>

      <ul>
        <li> Dashboard</li>
        <li> Notas</li>
        <li> Faltas</li>
        <li> Boletos</li>
        <li>Requerimentos</li>
      </ul>
    </div>
  );
}

export default Sidebar;