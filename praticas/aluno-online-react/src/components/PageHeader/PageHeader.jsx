import "./PageHeader.css"

function PageHeader({ titulo, subtitulo, avatar }) {
  return (
    <div className="page-header">
      <div className="page-header-texto">
        <h2>{titulo}</h2>
        {subtitulo && <p>{subtitulo}</p>}
      </div>

      <img src={avatar} alt="usuário" />
    </div>
  )
}

export default PageHeader