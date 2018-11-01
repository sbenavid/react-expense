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
import { login, logout } from './actions/auth';

import getVisibleExpenses from './selectors/expenses';
import {firebase} from './firebase/firebase';
//import 'react-dates/lib/css/_datepicker';
import LoadingPage from './components/LoadingPage';

const store = configStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;        
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// identificar si existio un cambio de estatus
// login/logout
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        console.log('login... userid:',user.uid);
        // asegurarse que el usuario obtenga su data especifica
        store.dispatch(startSetExpenses()).then(() => {         // ahorita toma todos los gastos
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
          });
        // redireccionar apropiadamente
    } else {        
        // cuando alguien se sale, mandarlo a la pag de login
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

