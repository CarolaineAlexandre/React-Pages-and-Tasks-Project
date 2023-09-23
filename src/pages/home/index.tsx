import { Link } from "react-router-dom";
import './App.css'

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
        <h1>Projeto React de Páginas e Tarefas</h1>
        <h3>
        Este projeto React tem como objetivo criar várias páginas para um site simples. Teremos quatro páginas principais:
        </h3>  
        <ul className="lista">
          <li><strong>Página Inicial:</strong> Esta página fornecerá uma breve apresentação do nosso projeto.</li>
          <li><strong>Página de Contato:</strong> Aqui, você encontrará um formulário que foi criado como parte de uma atividade anterior.</li>
          <li><strong>Página "Sobre":</strong> Nesta página, apresentaremos informações sobre quem desenvolveu o projeto e sua finalidade.</li>
          <li><strong>Página de Tarefas:</strong> A última página listará uma série de tarefas relacionadas ao projeto.</li>
        </ul>
      </div>
  </body>
        </>
    )
    }