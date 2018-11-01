import React, { Component } from 'react';
import logo from './logo.svg';

export default class Propriedade extends Component {
  campo = 10;
  constructor(props) {
    super(props);
    this.state = { texto: "Classe Propriedade" };
  }
  render() {
    let variavel = this.campo * 2;
    return (
      <div>
        {this.state.texto} <br />
        valor do campo: {this.campo}<br />
        valor da variável: {variavel} <br />
        valor da propriedade nome: {this.props.sobrenome}, {this.props.nome} 
        <img src={logo} />
      </div>
    );
  }
}