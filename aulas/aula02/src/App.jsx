import "./App.css";
import logo from "./assets/learn.svgrepo.com.svg";

function Cabeçalho() {
  return (
    <header>
      <h1>Título</h1>
    </header>
  );
}

function App() {
  return (
<main>
      <img src="/learn-svgrepo-com.svg" alt="icone chapeu"/>
      <h1>Aluno Online</h1>
      <label htmlFor="Matricula">Matrícula</label>
      <input type="number" id="Matricula"
      name="Matricula"/>
      <label htmlFor="senha">Senhas</label>
      <input type="password" id="senha" name="senha"/>
      <button type="submit"> Entrar</button>
    </main>
  );
}

export default App;

  {/* <div>
       <Cabeçalho />
      <div>{7 + 4}</div>
     <img src={logo} alt="" />
     <p></p>
  </div> */}