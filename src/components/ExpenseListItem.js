import React from 'react';
import { Link } from 'react-router-dom';
// biblioteca para formatear numeros: http://numeraljs.com/
import numeral from 'numeral';
// documentacion para moment: momentjs.com
import moment from 'moment';

// export a stateless functional component
// description, amount, createdAt
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>        
        <p>
        {numeral(amount).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM/DD/YYYY')}</p>
    </div>
);

export default ExpenseListItem;
