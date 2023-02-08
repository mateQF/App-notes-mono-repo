import React, { useState, useRef } from 'react'
import { Toggleable } from './Toggleable'

export default function CreateNoteForm ({ handleLogOut, addNote }) {
  const [newNote, setNewNote] = useState('')
  const toggleableRef = useRef()

  const handleChange = (e) => {
    setNewNote(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const noteToAdd = {
      content: newNote,
      important: Math.random() > 0.5
    }

    addNote(noteToAdd)
    setNewNote('')
    toggleableRef.current.toggleVisibility()
  }

  return (
    <>
      <Toggleable buttonLabel='Add a note' ref={toggleableRef}>
        <h2>Create a new note</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={handleChange}
            value={newNote}
            placeholder='Note content'
          />
          <button>Create note</button>
        </form>
      </Toggleable>
      <button onClick={handleLogOut} id='logout-button'>Logout</button>
    </>
  )
}
