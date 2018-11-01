import React, { Component } from 'react';

export default class ExemploLista extends Component {
 constructor() {
  super();
  this.state = {
   meses: [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"]
  };
 }

 render() {
  let lista = [];
  for (let x = 0; x < this.state.meses.length; x++) {
   let mes = <li>{this.state.meses[x]}</li>;
   lista.push(mes);
  }

  return (
   <ul>
    {lista}
   </ul>
  );
 }

 render2() {
  return (
   <ul>
    {this.state.meses.map((mes) =><li>{mes}</li>)}
   </ul>
  );
 }
}
