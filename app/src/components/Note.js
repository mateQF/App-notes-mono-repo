import React from 'react'
import { Link } from 'react-router-dom'
import { TableCell, Button } from '@material-ui/core'

export const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important'

  return (
    <>
      <TableCell className='note'>
        <Link to={`/notes/${note.id}`}>{note.content}</Link>
      </TableCell>
      <TableCell>
        {
          label === 'make not important'
            ? <Button variant='contained' color='secondary' onClick={toggleImportance}>{label}</Button>
            : <Button variant='contained' color='primary' onClick={toggleImportance}>{label}</Button>
        }
      </TableCell>
    </>
  )
}

export default Note
