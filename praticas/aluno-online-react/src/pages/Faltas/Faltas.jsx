import Layout from "../../components/Layout/Layout"
import "./Faltas.css"

function Faltas() {
  return (
    <Layout>
      <div className="faltas">

        <div className="topo">
          <h2>Minhas Faltas</h2>
            <div className="logo">
  <img src="./avatar.svg" alt="Logo" />
</div>
        </div>

        <p className="subtitulo">Histórico de Faltas por Semestre</p>

      
        <div className="card">
          <h3>2026.1</h3>

          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BI e Data Warehousing</td>
                <td>0</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Construção de Frontend</td>
                <td>0</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Manutenção de Software e Devops</td>
                <td>0</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </div>

       
        <div className="card">
          <h3>2025.2</h3>

          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Construção de Backend</td>
                <td>27</td>
                <td>87.5%</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </Layout>
  )
}

export default Faltas