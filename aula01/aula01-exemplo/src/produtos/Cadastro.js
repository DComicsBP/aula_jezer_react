import React, {Component} from 'react'; 

export default class Cadastro extends Component{
    constructor(){
        super(); 
        this.state = {nome:"", valor:""}; 

    }
    setParam(param, valor){
        this.setState({
            [param]:valor
        })
    }

    enviar(){
        this.props.onAdicionar
    }
    render(){
        return(
        <section>
            <label>Nome: </label><input  value={this.state.nome}
            onChange={(evento)=>
                this.setParam("nome",evento.target.value)
            } 
            />
            <br/>
            <br/>
            <label>Valor: </label><input type="number"value={this.state.valor} onChange={(evento)=>
                this.setParam("valor",evento.target.value)
            }/>
            <br/><br/>
            <button onClick={this.enviar()}>Adicionar</button>
        </section>
        );
    }
}