import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LoginPage, Home } from './components'
import { Dashboard } from "./pages/dashboard";
import { LocationDetail } from "./pages/LocationDetail";
import {useState} from 'react'
import { StoreProvider } from "./utils/GlobalState";


function App() {
  let [authToken, updateAuthToken] = useState(false)

  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/supersecretroutethisrouteissoooosecretthatyouwouldneverfinditbylookingelephantdidyouseehowelephantisinarandomplacethatmakesnosensethatmakesthisrouteevenhardertofind'>
              <h1>SECRET</h1>
            </Route>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/locations/:id" component={LocationDetail} />
            <Route exact path='/login'>
              <LoginPage updateAuthToken={(token) => {
                localStorage.setItem('authToken', token)
                updateAuthToken(token)
                window.location.href = '/dashboard'
              }} />
            </Route>
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
