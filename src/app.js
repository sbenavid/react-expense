import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// estilos
import 'normalize.css/normalize.css' // normalize es para dar imagen unificada entre browsers
import './styles/styles.scss'
// componentes creados
import AppRouter, {history} from './routers/AppRouter';
import configStore from './store/configStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import {firebase} from './firebase/firebase';
//import 'react-dates/lib/css/_datepicker';

const store = configStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Cargando...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});


// identificar si existio un cambio de estatus
// login/logout
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('login...');
    } else {        
        // cuando alguien se sale, mandarlo a la pag de login
        history.push('/');
    }
});