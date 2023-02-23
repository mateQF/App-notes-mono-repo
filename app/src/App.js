import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Notes from './Notes'
import { NoteDetail } from './components/NoteDetail'
import Login from './Login'
import { useUser } from './hooks/useUser'
import { useNotes } from './hooks/useNotes'
import { Navbar, Nav } from 'react-bootstrap'
import Container from '@material-ui/core/Container'
import { StyledLink } from './components/StyledLink'

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
      <Container>
        <Navbar collapseOnSelect expand='lg' bg='white' variant='white'>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link>
                <StyledLink to='/' style={inlineStyles}>Home</StyledLink>
              </Nav.Link>
              <Nav.Link>
                <StyledLink to='/notes' style={inlineStyles}>Notes</StyledLink>
              </Nav.Link>
              <Nav.Link>
                <StyledLink to='/users' style={inlineStyles}>Users</StyledLink>
              </Nav.Link>
              <Nav.Link>
                {
                  user
                    ? <em>Logged as {user.name}</em>
                    : <StyledLink to='/login' style={inlineStyles}>Login</StyledLink>
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
      </Container>
    </BrowserRouter>
  )
}

export default App
