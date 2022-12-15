import React from 'react';

export default function Item(props) {
    const { note, deleteNote } = props;

    return (
        <li className='Item'>
            <div className='Item-Content'>{note.content}</div>
            <button className='Item-DeleteButton' type='button' onClick={() => deleteNote(note.id)}>Delete</button>
        </li>
    )
}