import React from 'react';
import ReactDOM from 'react-dom';
// React-route
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// estilos
import 'normalize.css/normalize.css' // normalize es para dar imagen unificada entre browsers
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        <p>Esto es el copmonente de dashboard</p>
    </div>
);

const AddExpensePage = () => (
    <div>
        <p>Agregar gasto</p>
    </div>
);

const EditExpensePage = () => (
    <div>
        <p>Editar gasto</p>
    </div>
);

const HelpExpensePage = () => (
    <div>
        <p>Esta es la ayuda gasto</p>
    </div>
);

const NotFoundPage = () => (
    <div>
        <p>404!</p>
    </div>
);
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>        
    </BrowserRouter>
);
  
ReactDOM.render(routes, document.getElementById('app'));
