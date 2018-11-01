import React, { Component } from 'react';
import Propriedade from './Propriedade';
import Contagem from '../evento/Contagem';

export default class ExemploPropriedade extends Component {
  render() {
    return (
      <div>
        {/* DASDAS */}
        <Propriedade  
        nome="João"
        sobrenome="exemplo" 
        
        />
      </div>
    );
  }
}