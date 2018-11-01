import React, { Component } from 'react';

export default class ExemploRadio extends Component {
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
        return <div>
          <label>Sexo:</label><br/>
        <input type="radio" 
                id="sexo-masculino"
                checked={this.state.sexo == 'masculino'} 
                onChange={()=>this.setSexo("masculino") } /> 
                <label htmlFor="sexo-masculino">Masculino</label> <br/>
        <input type="radio" 
                id="sexo-feminino"
                checked={this.state.sexo == 'feminino'} 
                onChange={()=>this.setSexo("feminino") } />
                <label htmlFor="sexo-feminino">Feminino</label> <br/>
        </div>
    }
}