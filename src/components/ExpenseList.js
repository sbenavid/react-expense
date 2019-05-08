import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//stateless funcional component
export const ExpenseList = (props) => (
    <div className="content-container">
     <div className="list-header">
        <div className="show-for-mobile">Gastos</div>
        <div className="show-for-desktop">Gasto</div>
        <div className="show-for-desktop">Suma</div>
     </div>
     <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">            
            <span>No hay existen registros aun</span>
          </div>
        ) : (
            props.expenses.map((expense) => {
              return <ExpenseListItem key={expense.id} {...expense} />;
            })
          )
      }
    </div>
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


