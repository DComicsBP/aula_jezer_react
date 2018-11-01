import React, { Component } from 'react';

export default class ExemploFormulario extends Component {
    constructor() {
        super();
        // inicializa os campos
        this.state = {
            nome: "",
            sexo: "",
            nascimento: "",
            email: "",
            notificacao: ""
        };
    }
    // função genérica para atribuir valores do estado
    setValor(campo, valor) {
        this.setState(
            (estadoAntigo) => {
                estadoAntigo[campo] = valor;
                return estadoAntigo;

            });
    }

    // função que notifica o componente pai
    // através da callback cadastrar
    enviar() {
        let cadastro = {
            nome: this.state.nome,
            sexo: this.state.sexo,
            nascimento: this.state.nascimento,
            email: this.state.email,
            notificacao: this.state.notificacao
        };

        this.props.cadastrar(cadastro);
    }
    
    render() {
        return <form onSubmit={(evento) => {
          // Previne que o formulário faça o submit
          // trata o envio pelo método enviar
          evento.preventDefault(); this.enviar() }}
            style={{
                border: "1px solid black",
                padding: "10px"
            }}
        >
            <label>Nome:</label>
            <input type="text" value={this.state.nome} required
                onChange={(evento) => this.setValor("nome", evento.target.value)} />
            <br /><br />
            <label>Sexo:</label>
            <select value={this.state.sexo} required
                onChange={(evento) => this.setValor("sexo", evento.target.value)}>
                <option value=""></option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
            </select><br /><br />
            <label>Nascimento:</label>
            <input type="date" value={this.state.nascimento}
                onChange={(evento) => this.setValor("nascimento", evento.target.value)} />
            <br /><br />
            <label>E-mail:</label>
            <input type="email" value={this.state.email} required
                onChange={(evento) => this.setValor("email", evento.target.value)} />
            <br /><br />
            <input
                id="notificacao"
                type="checkbox"
                checked={this.state.notificacao}
                onChange={(evento) => this.setValor("notificacao", evento.target.checked)} />
            <label htmlFor="notificacao" >Receber notificação por e-mail </label>
            <br /><br />
            <button type="submit">Cadastar</button>
        </form>
    }
}
