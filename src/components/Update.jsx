import React from 'react';

export default function Update(props) {
    const { getNotes } = props;

    return (
        <div className='AppTitle-Conteiner'>
            <h3 className='AppTitle'>Notes</h3>
            <button className='UpdateButton' type='button' onClick={() => getNotes()}>Update</button>
        </div>
    )
}