import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

//stateless funcitonal component
export const PrivateRoute = ({
    isAuthenticated, 
    component: Componet,
    ...rest
}) => (
    <Route {...rest} component = {(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props}/>
            </div>            
        ) : (
            <Redirect to="/" />
        )

    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid  // si el valor está asignado, se volverá true
});

export default(mapStateToProps)(PrivateRoute);