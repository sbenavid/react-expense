import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {    
    return (
        <div>
            {/* <p>Editando el gasto con id: {props.expense.id}</p> */}
          <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                // dispatch change
                props.dispatch(editExpense(props.expense.id, expense));
                // regresar al dashboard
                props.history.push('/');
                
            }}
          />
        <button onClick={() =>{
            // borra y regresa al dashboard
            props.dispatch(removeExpense({ id:props.expense.id }));
            props.history.push('/');
        }}>Quitar</button>
        </div>
    );  
};

// pasar la info del id para editar
const mapStateToProps = (state, props) => {    
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);