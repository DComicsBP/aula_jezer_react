import React, { Component } from 'react';
import Contagem from './Contagem';

export default class ExemploEvento extends Component {
    constructor(){
    super();
    this.state={chegouExemplo:false};
}
  render() {
      if(this.state.chegouExemplo) 
        return <div>
            Finalizada a contagem:  
            <button onClick={()=>this.setState({chegouExemplo:false})}>
                Reiniciar</button>
            </div>;
        else 
            return <Contagem limite={10} chegou={(valor)=>this.setState({chegouExemplo:valor})} />;
  }
}
