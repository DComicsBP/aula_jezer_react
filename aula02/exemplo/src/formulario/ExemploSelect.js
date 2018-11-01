import React, { Component } from 'react';

export default class ExemploSelect extends Component {
    constructor() {
        super();
        this.state = { sexo:"" };
    }
    setSexo(valor) {
        this.setState({
            sexo:valor
        });
    }
    render() {
        return <span>
          <label>Sexo:</label>
          <select value={this.state.sexo} onChange={(evento)=>this.setSexo(evento.target.value)}>
            <option value=""></option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </span>
    }
}