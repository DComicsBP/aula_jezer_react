import React, { Component } from 'react';

export default class ExemploCheckBox extends Component {
    constructor() {
        super();
        this.state = { memorizar:"" };
    }
    setMemorizar(valor) {
        this.setState({
            memorizar:valor
        });
    }
    render() {
        return <span>
           <input
            id="memorizar"
            type="checkbox"
            checked={this.state.memorizar}
            onChange={(evento) =>this.setMemorizar(evento.target.checked)} />
            <label htmlFor="memorizar" >Memorizar senha</label>
        </span>
    }
}