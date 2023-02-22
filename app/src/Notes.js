import './App.css'
import { useState } from 'react'
import { useNotes } from './hooks/useNotes'
import { Note } from './components/Note'
import CreateNoteForm from './components/CreateNoteForm'
import Login from './Login'
import { useUser } from './hooks/useUser'
import Table from 'react-bootstrap/Table'

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
            <Table striped>
              <tbody>
                {notes.map((note) => (
                  <tr key={note.id}>
                    <Note key={note.id} note={note} toggleImportance={() => { toggleImportanceOfNote(note.id) }} />
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
          )
        : (<Login />)}
      <div className='error'>
        {error ? <span style={{ color: 'red' }}>{error}</span> : ''}
      </div>
    </div>
  )
}
