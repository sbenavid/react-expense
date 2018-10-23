// manejo de los filtros 
import React from 'react';
import { connect } from 'react-redux';
import { setTextFiler, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text} 
            onChange={(e) => {
                props.dispatch(setTextFiler(e.target.value));            
            }}
        />
        <select 
            value={props.filters.sortBy} 
            onChange={(e) => {
                if (e.target.value === 'date') {
                    props.dispatch(sortByDate());
                } else if (e.target.value === 'amount') {
                    props.dispatch(sortByAmount());
                }                
        }}>
            <option value="date">Fecha</option>
            <option value="amount">Monto</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

// version conectada
export default connect(mapStateToProps)(ExpenseListFilters);