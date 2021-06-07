import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LoginPage, Home } from './components'
import { useState } from 'react'
import LocationDetail from "./pages/LocationDetail";
import { StoreProvider } from "./utils/GlobalState";
import Dashboard from "./pages/dashboard";



function App() {
  let [authToken, updateAuthToken] = useState(false)

  return (
    <Router>
      <StoreProvider>
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