// manejo de los filtros 
import React from 'react';
import { connect } from 'react-redux';
import { setTextFiler } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFiler(e.target.value));
            console.log(e.target.value);
        }}/>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

// version conectada
export default connect(mapStateToProps)(ExpenseListFilters);