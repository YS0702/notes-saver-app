import React, { useState } from 'react'
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import './app.css'

const App = () => {

  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);
  const [theme, setTheme] = useState('light');

  const handleAddNote = () => {
    if(noteText.trim() === '') return;

    const newNote = {
      id: Date.now(),
      text: noteText,
      timestamp: new Date().toLocaleString()
    };

    setNotes([newNote, ...notes]);
    setNoteText('');
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleEditNote = (id, newText) => {
    const updatedNotes = notes.map((note) => 
      note.id === id ? {...note, text: newText} : note
    );
    setNotes(updatedNotes);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className='appClass'
      style={{
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: theme === 'light' ? '#f8f9fa' : '#1e1e1e',
        color: theme === 'light' ? '#222' : '#fff',
        minHeight: '100vh'
      }}
    >
      <h1>Notes App</h1>
      <button onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      <br />
      <br />

      <NoteInput
        noteText={noteText}
        setNoteText={setNoteText}
        handleAddNote={handleAddNote}
        theme={theme}
      />

      <NoteList notes={notes} onDelete={handleDeleteNote} onEdit={handleEditNote} theme={theme} />

    </div>
  )
}

export default App
