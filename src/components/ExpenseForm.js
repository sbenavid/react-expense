import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

const ahora = moment();
console.log(ahora.format('MMM/DD/YYYY'));

export default class ExpenseForm extends React.Component {
    state = {
        descripcion: '',
        nota: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false     //value
    }
    onDescriptionChange = (e) => {
        const descripcion = e.target.value;
        this.setState(() => ({ descripcion }))
    };
    onNoteChange = (e) => {
        const nota = e.target.value;
        this.setState(() => ({ nota }))
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        // validacion de un numero real mediante regex
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        } else {
            alert('Caracter invalido en importe, solo se permiten 2 decimales');
        }
    };
    // handler
    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}))
    };
    onFocusChange = ({ focused }) => {
        this.setState(() =>({calendarFocused: focused}))
    };
    render () {
        return (
            <div>            
                <form>
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
                      value={this.state.nota}
                      onChange={this.onDateChange}
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

