import React from 'react'
import Item from './Item'

export default function List(props) {
    const { notes, deleteNote } = props;

    const notesList = notes.map(note => <Item key={note.id} note={note} deleteNote={deleteNote} />)

    return (
        <ul className='List'>
            {notesList}
        </ul>
    )
}