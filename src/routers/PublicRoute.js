import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


//stateless funcitonal component
export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
  }) => (
      <Route {...rest} component={(props) => (
        isAuthenticated ? (            
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />            
          )
      )} />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid  // si el valor está asignado, se volverá true
});

export default connect(mapStateToProps)(PublicRoute);



