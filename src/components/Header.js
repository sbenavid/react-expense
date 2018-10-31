import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

// definir componente que estara en todas las paginas
const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        {/* link to home page */}
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        {/* Link to create page */}
        <NavLink to="/create" activeClassName="is-active">Nuevo</NavLink>        
        {/* link to help page */}
        <NavLink to="/help" activeClassName="is-active">Ayuda</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);