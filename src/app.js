import React from 'react';
import ReactDOM from 'react-dom';
// React-route
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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

// Link esta usando enlaces "client-side"
const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Regresar al inicio</Link>
    </div>
);

// definir componente que estara en todas las paginas
const Header = () => (
    <header>
        <h1>Expensify</h1>
        {/* link to home page */}
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        {/* Link to create page */}
        <NavLink to="/create" activeClassName="is-active">Nuevo</NavLink>
        {/* link to edit page */}
        <NavLink to="/edit" activeClassName="is-active">Cambiar</NavLink>
        {/* link to help page */}
        <NavLink to="/help" activeClassName="is-active">Ayuda</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>  
        </div>              
    </BrowserRouter>
);
  
ReactDOM.render(routes, document.getElementById('app'));
