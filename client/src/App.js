import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LoginPage, Home } from './components'
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
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src = {logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search" />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/supersecretroutethisrouteissoooosecretthatyouwouldneverfinditbylookingelephantdidyouseehowelephantisinarandomplacethatmakesnosensethatmakesthisrouteevenhardertofind'>
            <h1>SECRET</h1>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/login'>
            <LoginPage updateAuthToken={(token) => {
              localStorage.setItem('authToken', token)
              updateAuthToken(token)
              window.location.href = '/dashboard'
            }} />
          </Route>
          <Route exact path="/locations/:id" component={LocationDetail} />
        </Switch>
      </StoreProvider>
    </Router>
  );
}

export default App;