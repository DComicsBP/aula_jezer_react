import React, { Component } from 'react';

export default class ExemploInputHTML5 extends Component {
    constructor() {
        super();
        this.state = {
            color: "",
            date: "",
            datetimeLocal: "",
            email: "",
            month: "",
            number: "",
            range: "",
            search: "",
            tel: "",
            time: "",
            url: "",
            week: ""
        };
    }
    setValor(campo, valor) {
        this.setState(
            (estadoAntigo) => {
                estadoAntigo[campo] = valor;
                return estadoAntigo;

            });
    }
    render() {

        return <div><h2>HTML 5</h2>
            <label> type="color" =></label>
            <input type="color" value={this.state.color}
                onChange={(evento) => this.setValor("color", evento.target.value)} />
            &nbsp;Valor real:{this.state.color}<br /><br />

            <label> type="date" =></label>
            <input type="date" value={this.state.date}
                onChange={(evento) => this.setValor("date", evento.target.value)} />
            &nbsp;Valor real:{this.state.date}<br /><br />

            <label> type="datetime-local" =></label>
            <input type="datetime-local" value={this.state.datetimeLocal}
                onChange={(evento) => this.setValor("datetimeLocal", evento.target.value)} />
            &nbsp;Valor real:{this.state.datetimeLocal}<br /><br />

            <label> type="email" =></label>
            <input type="email" value={this.state.email}
                onChange={(evento) => this.setValor("email", evento.target.value)} />
            &nbsp;Valor real:{this.state.email}<br /><br />

            <label> type="month" =></label>
            <input type="month" value={this.state.month}
                onChange={(evento) => this.setValor("month", evento.target.value)} />
            &nbsp;Valor real:{this.state.month}<br /><br />

            <label> type="number" =></label>
            <input type="number" value={this.state.number}
                onChange={(evento) => this.setValor("number", evento.target.value)} />
            &nbsp;Valor real:{this.state.number}<br /><br />

            <label> type="range" =></label>
            <input type="range" value={this.state.range} min="0" max="10"
                onChange={(evento) => this.setValor("range", evento.target.value)} />
            &nbsp;Valor real:{this.state.range}<br /><br />

            <label> type="search" =></label>
            <input type="search" value={this.state.search}
                onChange={(evento) => this.setValor("search", evento.target.value)} />
            &nbsp;Valor real:{this.state.search}<br /><br />

            <label> type="tel" =></label>
            <input type="tel" value={this.state.tel}
                onChange={(evento) => this.setValor("tel", evento.target.value)} />
            &nbsp;Valor real:{this.state.tel}<br /><br />

            <label> type="time" =></label>
            <input type="time" value={this.state.time}
                onChange={(evento) => this.setValor("time", evento.target.value)} />
            &nbsp;Valor real:{this.state.time}<br /><br />

            <label> type="url" =></label>
            <input type="url" value={this.state.url}
                onChange={(evento) => this.setValor("url", evento.target.value)} />
            &nbsp;Valor real:{this.state.url}<br /><br />

            <label> type="week" =></label>
            <input type="week" value={this.state.week}
                onChange={(evento) => this.setValor("week", evento.target.value)} />
            &nbsp;Valor real:{this.state.week}<br /><br />

        </div>
    }
}