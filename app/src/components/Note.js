import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important'

  return (
    <>
      <td className='note'>
        <Link to={`/notes/${note.id}`}>{note.content}</Link>
      </td>
      <td>
        <Button onClick={toggleImportance}>{label}</Button>
      </td>
    </>
  )
}

export default Note
