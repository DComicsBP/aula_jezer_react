import React, { Component } from 'react';

export default class ExemploLista2 extends Component {
 constructor() {
  super();
  this.state = {
   contatos: [
     {id:1, nome:"João do Exemplo", email:"joao@exemplo.com"},
     {id:2, nome:"Maria do Exemplo", email:"maria@exemplo.com"},
     {id:3, nome:"Enzo do Exemplo", email:"enzo@exemplo.com"}
    ]
  };
 }
 render() {
  return (<table>
    <tr><th>Nome</th><th>E-mail</th></tr>
    {this.state.contatos.map((contato) =>
    <tr key={contato.id}>
      <td>{contato.nome}</td>
      <td>{contato.email}</td>
    </tr>)}
    </table>
  );
 }
}
