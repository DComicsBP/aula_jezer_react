import React, { Component } from 'react';

export default class ExemploEstado extends Component {
  constructor() {
    super();
    this.state = { contador: 1 }; // inicializa o estado 
    this.iniciaContagem();
  }
  iniciaContagem() {
    let funcao = () => this.setState({
      contador: this.state.contador + 1
      // define um novo estado a partir do estado anterior 
    });
    setInterval(funcao, 1000); 
    // executa a função a cada 1000 milesegundos (1 segundo)
  }
  render() {
    return <div>Contagem:{this.state.contador}</div>
    // renderiza o componente a partir do estado 
  }
}