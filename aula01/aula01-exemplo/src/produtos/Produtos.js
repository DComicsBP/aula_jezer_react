import React, {Component} from 'react'; 
import Cadastro from './Cadastro'; 

export default class Produtos extends Component{
    constructor() {
            super(); 
            this.state = {
                produtos:[]
            }
        }
    
    render(){
       

        return(
            <section>
                <h1> Cadastro de Produtos</h1>
                <Cadastro />
            </section>



        )
    }
}