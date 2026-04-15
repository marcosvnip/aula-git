import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="topo">
        <div>
          <h2>Olá, Aluno!</h2>
          <p>Bem-vindo ao portal do aluno</p>
        </div>
        <div className="logo">
  <img src="./avatar.svg" alt="Logo" />
</div>
      </div>

      <div className="card">
        <h3>Mural de Avisos</h3>
        <p>Inscrição para o projeto de extensão</p>
        <p>Eleição para representante de turma</p>
      </div>

      <div className="card">
        <h3>Calendário Acadêmico</h3>
        <p>23/02 - Início do período letivo 2026-1</p>
        <p>25/04 - Prazo final para aplicação da P1</p>
        <p>23/06 - Prazo final para aplicação da P2</p>
        <p>04/07 - Fim do período letivo 2026-1</p>
      </div>

      <div className="card">
        <h3>Minhas Disciplinas</h3>
        <p>Desenvolvimento Web</p>
        <p>Banco de Dados</p>
      </div>

    </div>
  );
}

export default Dashboard;