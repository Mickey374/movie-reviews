import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route, Link} from "react-router-dom"
import {Nav,Navbar} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';

import AddReview from './components/add-review'
import Login from './components/login'
import Movie from './components/movie'
import MoviesList from './components/movies-list'

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
        <Navbar.Brand>Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to={"/movies"}>Movies</Link>
              </Nav.Link>

              <Nav.Link>
                { user ? 
                (<a>Logout User</a>) : 
                (<Link to={"/login"}>Login</Link>)}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      < Switch >
        <Route exact path = {["/", "/movies"]} component = {MoviesList}>
        </Route> 

        <Route path = "/movies/:id/review" render = {(props) =><AddReview {...props} user = {user}/>} >
        </Route>

        <Route path = "/movies/:id/" render = {(props) =><Movie {...props}user = {user}/>} >
        </Route>

        <Route path = "/login" render = {(props) =><Login {...props}login = {login}/>} >
        </Route> 
      </Switch>
    </div>
  );
}
export default App;

