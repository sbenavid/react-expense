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

// agregar un gasto al repositorio firebase
export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        // cambio acceso para leer repositorio personalizado por cada usuario
        database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {            
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

export const startRemoveExpense = ( { id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

// Modificar un gasto ya existente, a partir de su id
export const editExpense = ( id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

// set expenses (obtener lista)
// este manipula el store
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  });

// async action para despachar el anterior
export const startSetExpenses = () => {
return (dispatch, getState) => {
    const uid = getState().auth.uid;
    // fetch from firebase. La consulta no funciona con mi db 'gastos',
    // la tuve que cambiar a "expenses"
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
    // en el mejor caso, se inicializa un arreglo vacio y se llena con
    // la data de la consulta
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
        expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
        });
    });

    dispatch(setExpenses(expenses));
    });
};
};