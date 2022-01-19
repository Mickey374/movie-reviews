import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route, Link} from 'react-router-dom'
import {Button, FormControl, Form, Nav,NavDropdown,Navbar,Container} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';

import {AddReview} from './components/add-review'
import {Login} from './components/login'
import {Movie} from './components/movie'
import {MoviesList} from './components/movies-list'

function App() {
  const [user, setUser] = React.useState(null)

  async function login(user = null) {
    setUser(user)
  }

  async function logout() {
    setUser(null)
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Movie Reviews</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={"/movies"}>Movies</Nav.Link>
              <Nav.Link>{
                user ? (
                  <a onClick={logout}>Logout User</a>
                ):(
                  <a href={"/login"}>Login</a>
                )
                }</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </div>
  );
}
export default App;

