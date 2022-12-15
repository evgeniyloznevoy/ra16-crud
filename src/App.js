import { useState, useEffect } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import List from './components/List';
import Update from './components/Update';

export default function App() {
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    fetch(process.env.REACT_APP_CRUD_URL)
      .then(response => response.json())
      .then((notes) => {
        setNotes(notes)
      })
  }

  useEffect(() => {
    getNotes();
  }, [])

  const addNote = (note) => {
    fetch(process.env.REACT_APP_CRUD_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note)
    })
      .then(() => getNotes())
  }

  const deleteNote = (id) => {
    fetch(`${process.env.REACT_APP_CRUD_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => getNotes())
  }

  return (
    <div className="App">
      <Update getNotes={getNotes} />
      <List notes={notes} deleteNote={deleteNote} />
      <AddForm addNote={addNote} />
    </div>
  );
}