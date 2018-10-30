import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
      this.props.editExpense(this.props.expense.id, expense);
      // regresar al dashboard
      this.props.history.push('/');
    };
    onRemove = () => {
      this.props.startRemoveExpense({ id: this.props.expense.id });
      // regresar al dashboard
      this.props.history.push('/');
    };
    render() {
      return (
        <div>
          <ExpenseForm            
            expense={this.props.expense}
            // dispatch change
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onRemove}>Remove</button>
        </div>
      );
    }
  };
// alan javier -total play


// pasar la info del id para editar
const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  });
  
  const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
  