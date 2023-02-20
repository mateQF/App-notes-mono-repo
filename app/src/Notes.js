import './App.css'
import { useEffect, useState } from 'react'
import { Note } from './components/Note'
import {
  create as createNote,
  getAll as getAllNotes,
  update as updateNote,
  setToken
} from './services/notes'
import CreateNoteForm from './components/CreateNoteForm'
import Login from './Login'

export default function App () {
  const [notes, setNotes] = useState([])
  const [error, setError] = useState('')

  const [user, setUser] = useState(null)

  useEffect(() => {
    getAllNotes().then((notes) => {
      setNotes(notes)
    })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    const user = JSON.parse(loggedUserJSON)
    setUser(user)
    if (user) {
      setToken(user.token)
    }
  }, [])

  const addNote = (noteToAdd) => {
    createNote(noteToAdd)
      .then((newNote) => {
        setNotes([...notes, newNote])
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find((note) => note.id === id)
    const changedNote = { ...note, important: !note.important }

    updateNote(id, changedNote).then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    }).catch(err => {
      setError(err)
      console.log(err)
    })
  }

  const handleLogOut = () => {
    setUser(null)
    setToken(user.token)
    window.localStorage.removeItem('loggedNoteAppUser')
  }

  return (
    <div>
      <h1>NOTES APP</h1>
      {user
        ? (
          <>
            <CreateNoteForm
              addNote={addNote}
              handleLogOut={handleLogOut}
            />
            <ol>
              {notes.map((note) => (
                <Note key={note.id} note={note} toggleImportance={() => { toggleImportanceOf(note.id) }} />
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
