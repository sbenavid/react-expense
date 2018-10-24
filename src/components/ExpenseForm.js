import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

// const ahora = moment();
// console.log(ahora.format('MMM/DD/YYYY'));

export default class ExpenseForm extends React.Component {
    state = {
        descripcion: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false     //value
    }
    onDescriptionChange = (e) => {
        const descripcion = e.target.value;
        this.setState(() => ({ descripcion }))
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
      };
    onAmountChange = (e) => {
        const amount = e.target.value;
        // validacion de un numero real mediante regex
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        } else {
            alert('Solo se permite importes con maximo 2 decimales');
        }
    };
    // handler
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}))
        }        
    };
    onFocusChange = ({ focused }) => {
        this.setState(() =>({calendarFocused: focused}))
    };
    onSubmit = (e) => {
        e.preventDefault();
        // validacion que no queden vacios los campos
        if (!this.state.descripcion || !this.state.amount) {
            // set error state
            this.setState(() => ({error: 'Descripcion o importe no pueden ir en blanco'}));
            console.log('error');
        } else {
            // clear error
            this.setState(() => ({error: ''}));
            console.log('submited');
            this.props.onSubmit({
                description: this.state.descripcion,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render () {
        return (
            <div>            
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                      type="text"
                      placeholder="Descripcion"
                      autoFocus
                      value={this.state.descripcion}
                      onChange={this.onDescriptionChange}
                    />
                    <input 
                      type="text"
                      placeholder="Cantidad"     
                      onChange={this.onAmountChange}                 
                    />
                    <SingleDatePicker 
                      date={this.state.createdAt}
                      onDateChange={this.onDateChange}
                      focused={this.state.calendarFocused}
                      onFocusChange={this.onFocusChange}
                      numberOfMonths={1}
                      isOutsideRange={() => false}
                    />
                    <textarea
                      placeholder="Nota sobre este gasto (opcional)"
                      value={this.state.note}                      
                      onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>
                        Agregar gasto
                    </button>
                </form>
            </div>
        )
    }
}

