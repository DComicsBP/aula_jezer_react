import React, { Component } from 'react';

export default class ExemploComponenteControlado extends Component {
    constructor() {
        super();
        this.state = { valor:"" };
    }
    setValor(valor) {
        this.setState({
            valor:valor
        });
    }
    render() {
        return <div>
            <label>Valor:</label>
                <input value={this.state.valor} 
                onChange={(evento)=>this.setValor(evento.target.value)} />
                &nbsp;Valor digitado({this.state.valor.length}):{this.state.valor}
            </div>
    }
}