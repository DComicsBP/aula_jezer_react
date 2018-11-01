import React, { Component } from 'react';

export default class ExemploTextArea extends Component {
    constructor() {
        super();
        this.state = { descricao:"" };
    }
    setDescricao(valor) {
        this.setState({
            descricao:valor
        });
    }
    render() {
        return <div>
            <label >Descrição:</label><br/>
            <textarea onChange={(evento)=>this.setDescricao(evento.target.value)}>
                {this.state.descricao}
            </textarea>
        </div>
    }
}
