import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './components/LoginPage.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <h1>home</h1>
        </Route>
        <Route exact path='/supersecretroutethisrouteissoooosecretthatyouwouldneverfinditbylookingelephantdidyouseehowelephantisinarandomplacethatmakesnosensethatmakesthisrouteevenhardertofind'>
          <h1>SECRET</h1>
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
