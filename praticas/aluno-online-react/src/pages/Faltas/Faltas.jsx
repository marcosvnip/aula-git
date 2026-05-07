import Layout from "../../components/Layout/Layout"
import "./Faltas.css"
import user from "../../assets/avatar.svg"
import PageHeader from "../../components/PageHeader/PageHeader"

<PageHeader
  titulo="Minhas Faltas"
  subtitulo="Histórico de Faltas por Semestre"
  avatar={user}
/>

function Faltas() {
  return (
    <Layout>
      <div className="faltas">

        <div className="topo">
          <h2>Minhas Faltas</h2>
          <img src={user} alt="usuário" />
        </div>

        <h3 className="subtitulo">
          Histórico de Faltas por Semestre
        </h3>

        <div className="card">
          <h4>2026.1</h4>

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
          <h4>2025.2</h4>

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

              <tr>
                <td>Estrutura de Dados</td>
                <td>12</td>
                <td>92%</td>
              </tr>

              <tr>
                <td>Gerenciamento de Projetos</td>
                <td>8</td>
                <td>95%</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </Layout>
  )
}

export default Faltas