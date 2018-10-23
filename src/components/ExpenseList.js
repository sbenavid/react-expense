import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//stateless funcional component
const ExpenseList = (props) => (
    <div>
        <h1>Lista de gastos</h1>
        {props.expenses.length}
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
);

// usar el selector para mostrar solamente los datos definidos por el filtro y sort
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// definir un elemento para el HOC
// el primer elemento define que informacion va a ser accesada
export default connect(mapStateToProps)(ExpenseList);

