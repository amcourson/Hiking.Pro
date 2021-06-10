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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img className="logo" src = {logo}  /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>

      </ul>
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