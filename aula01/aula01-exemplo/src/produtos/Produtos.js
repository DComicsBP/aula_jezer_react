import React, {Component} from 'react'; 
import Cadastro from './Cadastro'; 
import Tabela from './Tabela'; 


export default class Produtos extends Component{
    constructor() {
            super(); 
            this.state = {
                produtos:[]
            }
        }
    enviar(){
        this.props.onAdicionar({
            nome: this.state.nome,
            valor:Number(this.state.valor)
        });
        this.setState({
            nome:"", 
            valor:""
        }) 
    }
    
        
    excluir(produto){
        let produtos= this.state.produtos;
        let index = produtos.indexOf(produto) 
        produtos.splice(index,1); 
        this.setState({produtos:produtos});
    }
    render(){
       

        return(
            <section>
                <h1> Cadastro de Produtos</h1>
                <Tabela 
                itens = {this.state.produtos}
                onExcluir = {(produto)=>this.excluir(produto) }
                />
                <Cadastro onAdicionar/>

            </section>



        )
    }
}