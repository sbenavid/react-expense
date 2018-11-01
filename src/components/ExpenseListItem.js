import React from 'react';
import { Link } from 'react-router-dom';
// biblioteca para formatear numeros: http://numeraljs.com/
import numeral from 'numeral';
// documentacion para moment: momentjs.com
import moment from 'moment';

// export a stateless functional component
// description, amount, createdAt
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
        <Link  to={`/edit/${id}`}>
          <div>
            <h3>{description}</h3>  
            <span>{moment(createdAt).format('MMMM/DD/YYYY')}</span>
          </div>
          <h3>{numeral(amount/100).format('$0,0.00')}</h3>                         
        </Link> 
);

export default ExpenseListItem;
