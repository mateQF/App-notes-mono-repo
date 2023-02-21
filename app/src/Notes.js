import './App.css'
import { useState } from 'react'
import { useNotes } from './hooks/useNotes'
import { Note } from './components/Note'
import CreateNoteForm from './components/CreateNoteForm'
import Login from './Login'
import { useUser } from './hooks/useUser'

export default function Notes () {
  const { notes, addNote, toggleImportanceOf } = useNotes()
  const { user, logout } = useUser()
  const [error, setError] = useState('')

  const toggleImportanceOfNote = (id) => {
    toggleImportanceOf(id).catch(() => {
      setError('Note was already removed from server')
      setTimeout(() => {
        setError(null)
      }, 5000)
    })
  }

  return (
    <div>
      <h1>NOTES APP</h1>
      {user
        ? (
          <>
            <CreateNoteForm
              addNote={addNote}
              handleLogOut={logout}
            />
            <ol>
              {notes.map((note) => (
                <Note key={note.id} note={note} toggleImportance={() => { toggleImportanceOfNote(note.id) }} />
              ))}
            </ol>
          </>
          )
        : (<Login />)}
      <div className='error'>
        {error ? <span style={{ color: 'red' }}>{error}</span> : ''}
      </div>
    </div>
  )
}
