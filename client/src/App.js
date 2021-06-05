import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LoginPage, Dashboard, Home } from './components'
import {useState} from 'react'


function App() {
  let [authToken, updateAuthToken] = useState(false)
  
  return (
    <Router>
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
          }}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
