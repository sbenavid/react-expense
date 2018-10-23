import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Lista de gastos</h1>
        {props.filters.text}
        {props.expenses.length}
    </div>
);


const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

// definir un elemento para el HOC
// el primer elemento define que informacion va a ser accesada
export default connect(mapStateToProps)(ExpenseList);

