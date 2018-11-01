import React, {
  Component
} from 'react';

export default class ExemploEstado extends Component {
  constructor() {
    super();
    this.state = {
      contador: 1
    };
  }

  componentDidMount() {
    let funcao = () => this.setState({
      contador: this.state.contador + 1
    });
    this.interval = setInterval(funcao, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div> Contagem: {
      this.state.contador
    } </div>
    // renderiza o componente a partir do estado 
  }
}