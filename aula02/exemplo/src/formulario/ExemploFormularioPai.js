import React, { Component } from 'react';
import ExemploFormulario from './ExemploFormulario';

export default class ExemploFormularioPai extends Component {
    constructor() {
        super();
        this.state = {
            cadastro: null
        };
    }
    setCadastro(cadastro) {
        this.setState({
            cadastro: cadastro
        });
    }

    render() {
        return <div>
            <ExemploFormulario cadastrar={(cadastro) => this.setCadastro(cadastro)} />
            <br/> <br/>
            {this.state.cadastro ?
                <div>
                    Nome:{this.state.cadastro.nome}<br />
                    Sexo:{this.state.cadastro.sexo}<br />
                    Nascimento:{this.state.cadastro.nascimento}<br />
                    E-mail:{this.state.cadastro.email}<br />
                    Receber notificação? {this.state.cadastro.notificacao ? "sim" : "não"}<br />
                </div>
                : "Nenhum cadastro enviado"
            }
        </div>
    }
}