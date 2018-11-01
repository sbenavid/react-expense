import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// este componente no requiere utilizar estatus
export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Gastos</h1>
      <p>Relación de gastos personales.</p>
      <button className="button" onClick={startLogin}>Login</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
