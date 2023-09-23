import { Link } from "react-router-dom";
import './style.css'

export default function Sobre(){
    return (
        <>
      <header>
      <nav>
      <Link className="color" to='/'>Home</Link>
      <Link className="color" to='/formulario'>Formulário</Link>
      <Link className="color" to='/tarefa'>Tarefas</Link>
      <Link className="color" to='/sobre'>Sobre</Link>
        </nav>
      </header>
  <body>
  <div className="body">
        <h1>Olá! Sou a <br/>
        Carolaine Alexandre,</h1>
        <h3>
        Entusiasta da tecnologia apaixonada por resolver problemas por meio do desenvolvimento de software.
        </h3>  
        <p>
        Estou sempre em busca de novos desafios que me permitam aprender e crescer como profissional. Tenho conhecimentos em diferentes áreas, desde desenvolvimento web até análise de dados.
        </p>
      </div>
  </body>
        </>
    )
    }