import React, { useState } from 'react'

const NoteItem = ({note, onDelete, onEdit, theme}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(note.text)

  return (
    <div
        style={{
            margin: '10px 0',
            padding: '10px',
            background: theme === 'light' ? '#eee' : '#2e2e2e',
            color: theme === 'light' ? '#000' : '#fff',
            borderRadius: '5px',
            position: 'relative'
        }}
    >
        {isEditing ? (
            <div>
                <textarea
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    rows="3"
                    style={{width: '100%', marginBottom:'6px'}}
                />
                <button 
                    style={{
                        background: theme === 'light' ? 'orange' : '#aa6600'
                    }}
                    onClick={() => {
                    onEdit(note.id, editedText);
                    setIsEditing(false);
                }}>Save</button>
            </div>
        ) : (
            <div>
                <p style={{marginBottom:'6px'}}>{note.text}</p>
                <small style={{color: '#555'}}>{note.timestamp}</small>
                <button
                    onClick={() => setIsEditing(true)}
                    style={{
                        position: 'absolute',
                        right: '80px',
                        top: '10px',
                        background: theme === 'light' ? 'orange' : '#aa6600',
                        color: 'white',
                        border: 'none',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(note.id)}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '10px',
                        background: theme==='light' ? 'red' : '#b22222',
                        color: 'white',
                        border: 'none',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Delete
                </button>
            </div>
        )}
    </div>
  )
}

export default NoteItem
