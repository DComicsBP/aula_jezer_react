import React, { Component } from 'react';
import ExemploSelect from './ExemploSelect';
import ExemploCheckBox from './ExemploCheckBox';
import ExemploRadio from './ExemploRadio';
import ExemploTextArea from './ExemploTextArea';
import ExemploInputHTML5 from './ExemploInputHTML5';

export default class ExemploComponentes extends Component {
    render() {
        return <div>
            <ExemploSelect /><br/><br/>
            <ExemploCheckBox /><br/><br/>
            <ExemploRadio /><br/><br/>
            <ExemploTextArea /><br/><br/>
            <ExemploInputHTML5 />
            </div>
    }
}
