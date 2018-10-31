import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// este componente no requiere utilizar estatus
export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
