import React, { Component } from 'react';
import ExemploPropriedade from './subPasta/ExemploPropriedade';
import ExemploPropriedadeEstilo from './subPasta/ExemploPropriedadeEstilo';
import ExemploEstado from './estado/ExemploEstado';
import ExemploEstado7 from './estado/ExemploEstado7';
import ExemploEvento from './evento/ExemploEvento';
import ExemploEventoNativo from './evento/ExemploEventoNativo';
import ExemploComponenteControlado from './formulario/ExemploComponenteControlado';
import ExemploComponenteControlado2 from './formulario/ExemploComponenteControlado2';
import ExemploComponentes from './formulario/ExemploComponentes';
import ExemploFormularioPai from './formulario/ExemploFormularioPai';
import ExemploLista from './lista/ExemploLista';
import ExemploLista2 from './lista/ExemploLista2';
import ExemploFormularioCiclo from './ciclo/ExemploFormularioPai';
import ExemploEstadoCiclo from './ciclo/ExemploEstado';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import ExemploErro from './ciclo/ExemploErro';



class App extends Component {

  constructor() {
    super();

    

    this.state = {
      selecionado: "",
      exemplos: [

        {
          nome: "Propriedades",
          componente: ExemploPropriedade
        },
        {
          nome: "Propriedades estilo",
          componente: ExemploPropriedadeEstilo
        },
        {
          nome: "Estado",
          componente: ExemploEstado
        },
        {
          nome: "Estado com propriedades",
          componente: ExemploEstado7
        },
        {
          nome: "Eventos",
          componente: ExemploEvento
        },
        {
          nome: "Eventos Nativos",
          componente: ExemploEventoNativo
        },
        {
          nome: "Componente Controlado",
          componente: ExemploComponenteControlado
        },
        {
          nome: "Componente Controlado 2",
          componente: ExemploComponenteControlado2
        },
        {
          nome: "Componentes",
          componente: ExemploComponentes
        },
        {
          nome: "Formulários",
          componente: ExemploFormularioPai
        },
        {
          nome: "Lista",
          componente: ExemploLista
        },
        {
          nome: "Lista 2",
          componente: ExemploLista2
        },
        {
          nome: "Ciclo Estado",
          componente: ExemploEstadoCiclo
        },
        {
          nome: "Ciclo Erro",
          componente: ExemploErro
        },
        {
          nome: "Ciclo Formulário",
          componente: ExemploFormularioCiclo
        }

      ]
    };
  }
  render() {
    return <Router><div>
      <nav>
        <ul>
          {this.state.exemplos.map(
            (exemplo, index) =>
              <li><NavLink key={exemplo.nome}
                to={"/" + index}
                activeClassName="selecionado"
              >{exemplo.nome}</NavLink>
              </li>
          )}
        </ul>
      </nav>
      {this.state.exemplos.map(
        (exemplo, index) => <Route  path={"/" + index} component={exemplo.componente} />
      )}
    </div></Router>;
  }
}

export default App;
