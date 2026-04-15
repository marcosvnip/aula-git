import "./Requerimentos.css";

function Requerimentos() {
  return (
    <div className="dashboard">

      <div className="topo">
        <h2>Requerimentos</h2>
          <div className="logo">
  <img src="./avatar.svg" alt="Logo" />
</div>
      </div>

      <h3 className="titulo-secao">
        Solicitações
      </h3>

      <div className="bloco">

        <div className="req-card">
          <p><strong>Tipo:</strong> Declaração de Matrícula</p>
          <p><strong>Data:</strong> 10/04/2026</p>
          <p><strong>Status:</strong> <span className="aprovado">Aprovado</span></p>
        </div>

        <div className="req-card">
          <p><strong>Tipo:</strong> Histórico Escolar</p>
          <p><strong>Data:</strong> 05/04/2026</p>
          <p><strong>Status:</strong> <span className="pendente">Pendente</span></p>
        </div>

        <div className="req-card">
          <p><strong>Tipo:</strong> Segunda Via de Boleto</p>
          <p><strong>Data:</strong> 01/04/2026</p>
          <p><strong>Status:</strong> <span className="negado">Negado</span></p>
        </div>

      </div>

    </div>
  );
}

export default Requerimentos;