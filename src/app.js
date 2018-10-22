import React from 'react';
import ReactDOM from 'react-dom';
// estilos
import 'normalize.css/normalize.css' // normalize es para dar imagen unificada entre browsers
import './styles/styles.scss'
// componentes creados
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';
import { addExpense } from './actions/expenses';
import { setTextFiler } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configStore();

// Agregar dos gastos
store.dispatch(addExpense({ description: 'recibo del agua' }));
store.dispatch(addExpense({ description: 'recibo gas natural' }));
// filtro por "recibo"
store.dispatch(setTextFiler('gas'));

// definir 
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));
