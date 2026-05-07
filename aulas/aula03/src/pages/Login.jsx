import logo from '../assets/learn.svg'
import { useState } from 'react'

function Login() {
  const [matricula, setMatricula] = useState("")

  return (
    <>
      <img src={logo} alt="imagem da logo" />

      <form action="">
        <label htmlFor="matricula">Matrícula</label>
        <input
          type="number"
          id="matricula"
          name="matricula"
          onChange={(e) => setMatricula(e.target.value)}
        />

        <p>{matricula}</p>

        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" name="senha" />

        <p>{senha}<p>
            <label html for.

        <button type="submit">Entrar</button>
      </form>
    </>
  )
}

export default Login