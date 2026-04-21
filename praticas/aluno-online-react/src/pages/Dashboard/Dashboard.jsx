import Layout from "../../components/Layout/Layout"
import user from "../../assets/avatar.svg"
import PageHeader from "../../components/PageHeader/PageHeader"
import Card from "../../components/Card/Card"

function Dashboard() {
  return (
    <Layout>
      <div className="dashboard">
        <PageHeader
          titulo="Olá, Aluno!"
          subtitulo="Bem-vindo ao portal do aluno"
          avatar={user}
        />

        <Card titulo="Mural de Avisos">
          <p>Inscrição para o projeto de extensão</p>
          <p>Eleição para representante de turma</p>
        </Card>

        <Card titulo="Calendário Acadêmico">
          <p>23/02 - Início do período letivo 2026-1</p>
          <p>25/04 - Prazo final para aplicação da P1</p>
          <p>23/06 - Prazo final para aplicação da P2</p>
          <p>04/07 - Fim do período letivo 2026-1</p>
        </Card>

        <Card titulo="Minhas Disciplinas">
          <p>Desenvolvimento Web</p>
          <p>Banco de Dados</p>
          <p>Engenharia de Software</p>
        </Card>
      </div>
    </Layout>
  )
}

export default Dashboard