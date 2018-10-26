import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// estilos
import 'normalize.css/normalize.css' // normalize es para dar imagen unificada entre browsers
import './styles/styles.scss'
// componentes creados
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';

const store = configStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
