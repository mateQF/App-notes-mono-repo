export const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important'

  return (
    <li>
      <div>
        <strong><p>{note.content}</p></strong>
      </div>
      <button onClick={toggleImportance}>{label}</button>
      <hr />
    </li>
  )
}

export default Note
