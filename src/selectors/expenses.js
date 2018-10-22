//
// Get visible expenses
//
// Aplicar los filtros para mostrar solo los operadores en la data
//
// uso deserializacion del argumento objeto "filtro" para obtener los criterios
// que se usaran en el filtrado de data
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        // vamos a buscar si la descripcion del gasto incluye el texto de busqueda
        // se convierte ambos strings a minuscula.
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};