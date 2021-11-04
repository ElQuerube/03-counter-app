import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';
//import CounterApp from './CounterApp';

//const saludo = <h1>Hola Mudno</h1>
const divRoot = document.querySelector('#root');
ReactDom.render( <PrimeraApp saludo='Hola Soy Luis Parra'/>, divRoot);