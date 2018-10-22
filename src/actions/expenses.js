// biblio para crear un object id
import uuid from 'uuid';
// Agregar un nuevo gasto
export const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

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