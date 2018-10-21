import React from 'react';

const EditExpensePage = (props) => {
    //console.log(props);
    return (
        <div>
          Cambiar el gasto asociado al id {props.match.params.id}
        </div>
    );  
};

export default EditExpensePage;