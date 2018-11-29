import React, {
  Component
} from 'react';

import ExemploErroDiv from './ExemploErroDiv';

export default class ExemploErro extends Component {
  constructor() {
    super();
    this.state = {
      contador: 1
    };
  }

  componentDidMount() {
    let funcao = () => this .setState({
      contador: this.state.contador + 1
    });
    this.interval = setInterval(funcao, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidCatch(erro, info) {     
    this.setState({erro:erro,info:info });
  }
  render() {
    if (this.state.erro) {
      return <h1>Erro:{this.state.erro.toString()} </h1>;
    } else {
      return <div> Contagem:
        {this.state.contador<5?this.state.contador:<ExemploErroDiv/>}
     </div>
    } 
  }
}