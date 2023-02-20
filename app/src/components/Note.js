import React from 'react'
import { Link } from 'react-router-dom'

export const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important'

  return (
    <li>
      <div>
        <Link to={`/notes/${note.id}`}>
          <strong><p>{note.content}</p></strong>
        </Link>
      </div>
      <button onClick={toggleImportance}>{label}</button>
      <hr />
    </li>
  )
}

export default Note
