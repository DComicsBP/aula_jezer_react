import React, { Component } from 'react';

export default class Contagem extends Component {
    constructor() {
        super();
        this.state = { contador: 1, terminou: false }; // inicializa o estado 
        setInterval(() => this.incrementa(), 1000);
    }
    incrementa() {
        if (this.state.contador == this.props.limite) {
            this.setState({chegou: true },
            ()=>{this.props.chegou(this.state.chegou)});
        } else {
            this.setState((estadoAnterior, props) => {
                return { contador: estadoAnterior.contador+1}
            });
        }
    }
    render() {
        return <div>Contagem:{this.state.contador}</div>
    }
}