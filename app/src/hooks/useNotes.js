import { useEffect, useState } from 'react'
import {
  getAll as getAllNotes,
  create as createNote,
  update as updateNote
} from '../services/notes'

export const useNotes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAllNotes().then((notes) => {
      setNotes(notes)
    })
  }, [])

  const addNote = (noteToAdd) => {
    createNote(noteToAdd)
      .then((newNote) => {
        setNotes([...notes, newNote])
      })
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find((note) => note.id === id)
    const changedNote = { ...note, important: !note.important }

    return updateNote(id, changedNote).then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
  }

  return {
    notes,
    setNotes,
    addNote,
    toggleImportanceOf
  }
}
