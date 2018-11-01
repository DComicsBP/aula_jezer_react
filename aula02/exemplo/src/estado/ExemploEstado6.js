import React, { Component } from 'react';

export default class ExemploEstado6 extends Component {
  constructor() {
    super();
    this.state = { contador: 0 }; // inicializa o estado 
    setInterval(()=>this.incrementa(),1000);
  }
  
  incrementa() {
   this.setState((estadoAnterior, props) => {
     return { contador: estadoAnterior.contador + props.salto}
   });
  } 
  render() {
    return <div>Contagem:{this.state.contador}</div>
    // renderiza o componente a partir do estado 
  }
 
 }
