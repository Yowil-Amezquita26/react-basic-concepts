import logo from './logo.svg'
import './App.css'
import Componente from './components/Component'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import Eventos from './components/Eventos'
import { EventosES6, EventosES7, MasSobreEventos } from './components/EventosES6'
import Padre from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida'
import AjaxApis from './components/AjaxApi'
import ContadorHooks from './components/ContadorHooks'
import ScroolHooks from './components/ScroolHooks'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="hola mundo soy una prop" />
          <hr></hr>
          <Propiedades
            cadena="es una cadena"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{nombre:"yowil",apellido:"amezquita"}}
          ></Propiedades>
          <hr></hr>
          <Estado/>
          <hr></hr>
          <RenderizadoCondicional/>
          <hr></hr>
          <RenderizadoElementos/>
          <hr></hr>
          <Eventos/>
          <hr></hr>
          <EventosES6/>
          <hr></hr>
          <EventosES7/>
          <hr></hr>
          <MasSobreEventos/>
          <hr></hr>
          <Padre/>
          <hr></hr>
          <CicloVida/>
          <hr></hr>
          {/* <AjaxApis/> */}
          <hr></hr>
          <ContadorHooks/>
          <hr></hr>
          <ScroolHooks/>
        </section>
      </header>
    </div>
  )
}

export default App
