import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Login, Home } from './pages'
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
        <NavBar />
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