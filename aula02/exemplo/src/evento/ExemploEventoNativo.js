import React, { Component } from 'react';

export default class ExemploEvento extends Component {
    constructor() {
        super();
        this.state = { contador: 1, contar: true };
        setInterval(() => this.incrementa(), 1000);
    }
    incrementa() {
        if (this.state.contar) {
            this.setState((estadoAnterior) => {
                return { contador: estadoAnterior.contador+1}
            });
    }
}
    render() {
        return <div>Contagem:{this.state.contador} 
        <br/>     <br/>
        <button onClick={(evento)=>{
            this.setState({
                contar:!this.state.contar
            })
         }}>
            {this.state.contar?"Parar":"Continuar"}
            </button></div>
    }
}