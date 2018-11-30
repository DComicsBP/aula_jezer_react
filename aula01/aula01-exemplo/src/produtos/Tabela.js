import React, {Component } from 'react'; 

export default class Tabela extends Component{
    constructor() {
        super(); 
        this.state = {
            nome:"", 
            valor:""
        }
    }
   render(){
        return( 
        <div>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.itens.map(
                        (produto)=>
                        <tr>
                            <td>
                                {produto.nome}
                            </td>
                            <td>
                                {produto.valor}
                            </td>
                            <td>
                                <button onClick={()=>this.props.onExcluir(produto)}>
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    )
                }

            </tbody>
            <tfoot>

            </tfoot>
        </table>
        </div>
        )
    }
}