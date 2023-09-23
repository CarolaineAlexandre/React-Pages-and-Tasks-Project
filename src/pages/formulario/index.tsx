import { Link } from 'react-router-dom'
import ButtonFatec from '../../components/ButtonFatec'
import InputFatec from '../../components/InputFatec/InputFatec'
import './App.css'
// import './App.css'
// import ButtonFatec from './components/ButtonFatec'
// import InputFatec from './components/InputFatec/InputFatec'

function App() {

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
  <div className='form'>
  <h2>
    Formulário de Contato
  </h2>

  <div className="input-container">
    <InputFatec type='text' placeholder='Nome'/>
  </div>
  <div className="input-container">
    <InputFatec type='email' placeholder='E-mail'/>
  </div>
  <div className="input-container">
    <InputFatec type='tel' placeholder='Telefone'/>
  </div>
  <div className="input-container">
     <ButtonFatec type='button' label='ENVIAR'/>
  </div>
    {/* <ButtonFatec type='reset' label='Enviar form'/> */}
  </div>
  </body>    
    </>
  )
}
//
//<ButtonFatec ></ButtonFatec>
//para comentar ctrl + ;
export default App
