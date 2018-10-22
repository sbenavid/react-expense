import React from 'react';
import ReactDOM from 'react-dom';
// estilos
import 'normalize.css/normalize.css' // normalize es para dar imagen unificada entre browsers
import './styles/styles.scss'
// componentes creados
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';

const store = configStore();

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
