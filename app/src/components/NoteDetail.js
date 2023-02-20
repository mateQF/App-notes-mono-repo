import React from 'react'
import { useParams } from 'react-router'

export const NoteDetail = ({ notes }) => {
  const { id } = useParams()
  const note = notes.find(note => note.id === id)
  if (!note) return null
  return (
    <div>
      <h2>{note.content}</h2>
      <div>Username: {note.user.name}</div>
      <div>
        <strong>
          Importance: {note.important ? 'important' : 'not important'}
        </strong>
      </div>
    </div>
  )
}
