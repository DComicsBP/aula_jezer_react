import React, { Component } from 'react';

export default class ExemploFormularioLista extends Component {

    render() {
        return <div>
            {this.props.cadastros.map((cadastro, index) =>
                <div>
                    Nome:{cadastro.nome}<br />
                    Sexo:{cadastro.sexo}<br />
                    Nascimento:{cadastro.nascimento}<br />
                    E-mail:{cadastro.email}<br />
                    Receber notificação? {cadastro.notificacao ? "sim" : "não"}<br />
                    <button onClick={()=>this.props.editar(index)}>Editar</button>
                    <br/><br/>
                </div>


            )}

        </div>;
    }
}
