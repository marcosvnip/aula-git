import Layout from "../../components/Layout/Layout"
import "./Notas.css"
import user from "../../assets/avatar.svg"
import PageHeader from "../../components/PageHeader/PageHeader"

function Notas() {
  return (
    <Layout>
      <div className="notas">
        <PageHeader
          titulo="Minhas Notas"
          subtitulo="Histórico de Notas por Semestre"
          avatar={user}
        />

        <div className="card">
          <h4>2026.1</h4>

          <table>
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
                <td></td>
                <td></td>
                <td></td>
                <td>SR</td>
              </tr>

              <tr>
                <td>Construção de Frontend</td>
                <td></td>
                <td></td>
                <td></td>
                <td>SR</td>
              </tr>

              <tr>
                <td>Manutenção de Software e Devops</td>
                <td></td>
                <td></td>
                <td></td>
                <td>SR</td>
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
                <th>A1</th>
                <th>A2</th>
                <th>A3</th>
                <th>Menção</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Construção de Backend</td>
                <td>5.4</td>
                <td>6.2</td>
                <td></td>
                <td>MM</td>
              </tr>

              <tr>
                <td>Estrutura de Dados</td>
                <td>6.3</td>
                <td>6.1</td>
                <td></td>
                <td>MM</td>
              </tr>

              <tr>
                <td>Gerenciamento de Projetos</td>
                <td>7.4</td>
                <td>7.1</td>
                <td></td>
                <td>MS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Notas
