import "./Boletos.css";

function Boletos() {
  return (
    <div className="dashboard">

      <div className="topo">
        <h2>Boletos</h2>
        <div className="logo">
  <img src="./avatar.svg" alt="Logo" />
</div>
      </div>

      <h3 className="titulo-secao">
        Mensalidades
      </h3>

      <div className="bloco">
        <table className="tabela">
          <thead>
            <tr>
              <th>Mês</th>
              <th>Valor</th>
              <th>Vencimento</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Janeiro</td>
              <td>R$ 500,00</td>
              <td>10/01/2026</td>
              <td className="pago">Pago</td>
            </tr>

            <tr>
              <td>Fevereiro</td>
              <td>R$ 500,00</td>
              <td>10/02/2026</td>
              <td className="pago">Pago</td>
            </tr>

            <tr>
              <td>Março</td>
              <td>R$ 500,00</td>
              <td>10/03/2026</td>
              <td className="pendente">Pendente</td>
            </tr>

            <tr>
              <td>Abril</td>
              <td>R$ 500,00</td>
              <td>10/04/2026</td>
              <td className="atrasado">Atrasado</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
<div className="tabela-container">
  <table className="tabela">
    ...
  </table>
</div>

export default Boletos;