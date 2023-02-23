import './App.css'
import { useState } from 'react'
import { useNotes } from './hooks/useNotes'
import { Note } from './components/Note'
import Login from './Login'
import CreateNoteForm from './components/CreateNoteForm'
import { useUser } from './hooks/useUser'
import { TableContainer, Table, TableBody, TableRow } from '@material-ui/core'

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
            <TableContainer>
              <Table>
                <TableBody>
                  {notes.map((note) => (
                    <TableRow key={note.id}>
                      <Note key={note.id} note={note} toggleImportance={() => { toggleImportanceOfNote(note.id) }} />
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
          )
        : (<Login />)}
      <div>
        {
          error
            ? <span className='error'>{error}</span>
            : ' '
        }
      </div>
    </div>
  )
}
