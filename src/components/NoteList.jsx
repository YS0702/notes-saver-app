import React from 'react'
import NoteItem from './NoteItem';

const NoteList = ({notes, onDelete, onEdit, theme}) => {
  return (
    <div>
      <h2>Your Notes</h2>
      {
        notes.length === 0 ? (
            <p>No notes yet...</p>
        ) : (
            notes.map((note) => (
                <NoteItem key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} theme={theme} />
            ))
        )
      }
    </div>
  )
}

export default NoteList
