import Layout from "../../components/Layout/Layout"
import "./Requerimentos.css"
import user from "../../assets/avatar.svg"
import PageHeader from "../../components/PageHeader/PageHeader"
<PageHeader
  titulo="Meus Requerimentos"
  subtitulo="Faça solicitações online para a secretaria"
  avatar={user}
/>

function Requerimentos() {
  return (
    <Layout>
      <div className="requerimentos">

        <div className="topo">
          <div>
            <h2>Meus</h2>
            <h2>Requerimentos</h2>
          </div>

          <img src={user} alt="usuário" />
        </div>

        <h3 className="subtitulo">
          Faça solicitações online para a secretaria
        </h3>

        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Tipo de Requerimento</th>
                <th>Data de Solicitação</th>
                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Revisão de Menção</td>
                <td>15/12/2025</td>
                <td className="negado">Indeferido</td>
              </tr>

              <tr>
                <td>Dispensa de Disciplina</td>
                <td>12/06/2025</td>
                <td className="negado">Indeferido</td>
              </tr>

              <tr>
                <td>Trancamento de Matrícula</td>
                <td>05/01/2024</td>
                <td className="ok">Deferido</td>
              </tr>

              <tr>
                <td>Mudança de Turno</td>
                <td>10/10/2023</td>
                <td className="ok">Deferido</td>
              </tr>

              <tr>
                <td>Renovação de Matrícula</td>
                <td>20/02/2023</td>
                <td className="ok">Deferido</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </Layout>
  )
}

export default Requerimentos
