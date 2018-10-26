//
// Action generators para expenses
//
// biblio para crear un object id
import uuid from 'uuid';
import database from '../firebase/firebase';


// component calls action generator
// action generator return object
// component dispatches object
// redux store changes

// Agregar un nuevo gasto
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        database.ref('gastos').push(expense).then((ref) => {            
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    };
};

// removeExpense action generator
export const removeExpense = ( { id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Modificar un gasto ya existente, a partir de su id
export const editExpense = ( id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});