import React from 'react';

function NoteInput({ noteText, setNoteText, handleAddNote, theme }) {
  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Write your note here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#000' : '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px'
        }}
      ></textarea>

      <br />

      <button 
      onClick={handleAddNote}
      style={{
        padding: '8px 16px',
        fontSize: '16px',
        marginTop: '10px',
        cursor: 'pointer',
        backgroundColor: theme === 'light' ? '#007bff' : '#555',
        color: '#fff',
        border: 'none',
        borderRadius: '4px'
      }}
      >Add Note</button>
    </div>
  );
}

export default NoteInput;
