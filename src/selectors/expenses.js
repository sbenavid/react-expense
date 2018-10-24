import moment from 'moment';
import { create } from 'domain';
//
// Los selectors hacen los querys
//
// Aplicar los filtros para mostrar solo los operadores en la data
//
// uso deserializacion del argumento objeto "filtro" para obtener los criterios
// que se usaran en el filtrado de data
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;

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