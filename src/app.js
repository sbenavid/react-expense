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

const store = configStore();

// Agregar dos gastos
store.dispatch(addExpense({ description: 'recibo del agua', amount:2500, createdAt:1000 }));
store.dispatch(addExpense({ description: 'recibo gas natural', amount:5300 }));
store.dispatch(addExpense({ description: 'renta', amount:46000, createdAt:12300 }));
// filtro por "recibo"
// store.dispatch(setTextFilter('recibo'));

// funcion para hacer un timeout
// setTimeout(() => {
//     store.dispatch(setTextFilter(''));
// },3000);

// definir 
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
