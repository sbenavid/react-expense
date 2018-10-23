import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        descripcion: '',
        nota: '',
        amount: ''
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
    }
    render () {
        return (
            <div>
                ExpenseForm
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
                    <textarea
                      placeholder="Nota sobre este gasto (opcional)"
                      value={this.state.nota}
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

