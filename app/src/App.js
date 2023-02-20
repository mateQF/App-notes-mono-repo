import React, { useEffect, useState } from 'react'
import { getAll as getAllNotes, setToken } from './services/notes'
import { Link, BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Notes from './Notes'
import { NoteDetail } from './components/NoteDetail'
import Login from './Login'

const Home = () => <h1>Home</h1>

const Users = () => <h1>Users</h1>

const inlineStyles = {
  padding: 8
}

const App = () => {
  const [notes, setNotes] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    const user = JSON.parse(loggedUserJSON)
    setUser(user)
    if (user) {
      setToken(user.token)
    }
  }, [])

  useEffect(() => {
    getAllNotes().then((notes) => {
      setNotes(notes)
    })
  }, [])

  return (
    <BrowserRouter>
      <header>
        <Link to='/' style={inlineStyles}>Home</Link>
        <Link to='/notes' style={inlineStyles}>Notes</Link>
        <Link to='/users' style={inlineStyles}>Users</Link>
        {
          user
            ? <em>Logged as {user.name}</em>
            : <Link to='/login' style={inlineStyles}>Login</Link>
        }
      </header>
      <Routes>
        <Route path='/notes/:id' element={<NoteDetail notes={notes} />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/users' element={<Users />} />
        <Route
          path='/login' element={
        user ? <Navigate to='/' replace /> : <Login />
      }
        />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
