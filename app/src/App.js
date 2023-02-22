import React from 'react'
import { Link, BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Notes from './Notes'
import { NoteDetail } from './components/NoteDetail'
import Login from './Login'
import { useUser } from './hooks/useUser'
import { useNotes } from './hooks/useNotes'
import { Navbar, Nav } from 'react-bootstrap'

const Home = () => <h1>Home</h1>

const Users = () => <h1>Users</h1>

const inlineStyles = {
  padding: 8
}

const App = () => {
  const { user } = useUser()
  const { notes } = useNotes()

  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar collapseOnSelect expand='lg' bg='white' variant='white'>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link>
                <Link to='/' style={inlineStyles}>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/notes' style={inlineStyles}>Notes</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/users' style={inlineStyles}>Users</Link>
              </Nav.Link>
              <Nav.Link>
                {
                  user
                    ? <em>Logged as {user.name}</em>
                    : <Link to='/login' style={inlineStyles}>Login</Link>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
      </div>
    </BrowserRouter>
  )
}

export default App
