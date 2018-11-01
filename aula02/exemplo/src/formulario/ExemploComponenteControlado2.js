import React, { Component } from 'react';

export default class ExemploComponenteControlado2 extends Component {
    constructor() {
        super();
        this.state = { valor: "" };
    }
    setValor(valor) {
        this.setState({
            valor: valor.replace(/[^0-9]/g, '')
        });
    }
    render() {
        return <div>
            <label>Valor numérico:</label>
            <input value={this.state.valor}
                onChange={(evento) => this.setValor(evento.target.value)} />
        </div>
    }
}