import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
<<<<<<< HEAD
import { LoginPage, Home, NavBar } from './components'
=======
import { Login, Home } from './pages'
>>>>>>> main
import { useState } from 'react'
import LocationDetail from "./pages/LocationDetail";
import { StoreProvider } from "./utils/GlobalState";
import Dashboard from "./pages/dashboard";
import logo from "./logo.png";



function App() {
  let [authToken, updateAuthToken] = useState(false)


  return (
    <Router>
      <StoreProvider>
<<<<<<< HEAD
        <NavBar />
=======
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src = {logo}  /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarColor02">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Dashboard</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
>>>>>>> main
        <Switch>
          <Route exact path='/'>
            <Home updateAuthToken={(token) => {
              localStorage.setItem('authToken', token)
              updateAuthToken(token)
              window.location.href = '/dashboard'
            }} />
          </Route>
          <Route exact path='/supersecretroutethisrouteissoooosecretthatyouwouldneverfinditbylookingelephantdidyouseehowelephantisinarandomplacethatmakesnosensethatmakesthisrouteevenhardertofind'>
            <h1>SECRET</h1>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/login'>
            <Login updateAuthToken={(token) => {
              localStorage.setItem('authToken', token)
              updateAuthToken(token)
              // window.location.href = '/dashboard'
            }} />
          </Route>
          <Route exact path="/locations/:id" component={LocationDetail} />
        </Switch>
      </StoreProvider>
    </Router>
  );
}

export default App;