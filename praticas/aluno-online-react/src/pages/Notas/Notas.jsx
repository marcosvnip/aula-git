import "./Notas.css";

function Notas() {
  return (
    <div className="dashboard">

      <div className="topo">
        <h2>Minhas Notas</h2>
          <div className="logo">
  <img src="./avatar.svg" alt="Logo" />
</div>
      </div>

      <h3 className="titulo-secao">
        Histórico de Notas por Semestre
      </h3>

      
      <div className="bloco">
        <div className="semestre">2026.1</div>

        <table className="tabela">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>A1</th>
              <th>A2</th>
              <th>A3</th>
              <th>Menção</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>BI e Data Warehousing</td>
              <td>7.5</td>
              <td>8.0</td>
              <td>-</td>
              <td className="mm">MM</td>
            </tr>

            <tr>
              <td>Construção de Frontend</td>
              <td>9.0</td>
              <td>8.5</td>
              <td>-</td>
              <td className="ss">SS</td>
            </tr>

            <tr>
              <td>Manutenção de Software e Devops</td>
              <td>5.0</td>
              <td>6.0</td>
              <td>-</td>
              <td className="sr">SR</td>
            </tr>
          </tbody>
        </table>
      </div>

     
      <div className="bloco">
        <div className="semestre">2025.2</div>

        <table className="tabela">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>A1</th>
              <th>A2</th>
              <th>A3</th>
              <th>Menção</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Banco de Dados</td>
              <td>8.0</td>
              <td>7.5</td>
              <td>-</td>
              <td className="mm">MM</td>
            </tr>

            <tr>
              <td>Lógica de Programação</td>
              <td>9.5</td>
              <td>9.0</td>
              <td>-</td>
              <td className="ss">SS</td>
            </tr>

            <tr>
              <td>Engenharia de Software</td>
              <td>6.0</td>
              <td>5.5</td>
              <td>-</td>
              <td className="sr">SR</td>
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

export default Notas;